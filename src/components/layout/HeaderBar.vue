<template>
  <div class="header-wrapper">
    <div class="nav-menu-fold" @click="menuFold">
      <i class="el-icon-s-fold"></i>
    </div>
    <!-- <h1>{{ $t('message.头部') }}</h1> -->
    <div class="languageSty">
      <el-dropdown type="primary" trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          {{ $t('message.语言') }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="listStyClass">
          <el-dropdown-item command='Chinese'>{{ $t('message.中文') }}</el-dropdown-item>
          <el-dropdown-item command='English'>{{ $t('message.英文') }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="user-info">
      欢迎<span class="userName">{{userName}}</span>
      <span class="loginBtn" @click="loginBtn">退出</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      // title: 'header'
    };
  },
  created() {
    this.userName = JSON.parse(sessionStorage.getItem('user'))
  },
  methods: {
    // ...mapActions(['setLanguage']),
    ...mapActions({
      setLanguage: 'setLanguage'
    }),
    handleCommand (command) {
      if (command === 'Chinese') {
        this.setLanguage({lang: 'zh'})
        this.$i18n.locale = this.langdata
      }else {
        this.setLanguage({lang: 'en'})
        this.$i18n.locale = this.langdata
      }
    },
    menuFold () {
      this.$store.commit('SET_MENUFOLD')
      this.$emit('widthChange')
    },
    loginBtn () {
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapState({
      langdata: (state) => {return state.app.lang},
      // loginState: (state) => {return state.app.loginState}
    })
  },
  components: {}
};
</script>

<style scoped lang="scss">
.el-popper[x-placement^=bottom] {
  margin-left: -10px;
}
.header-wrapper {
  position: relative;
  width: 100%;
  top: 0;
  height: 60px;
  background: rgb(31, 29, 29);
  .nav-menu-fold {
    position: absolute;
    height: 60px;
    line-height: 70px;
    left: 15%;
    font-size: 40px;
    color: #fff;
    cursor: pointer;
  }
  .header-wrapper-move-sty-left {
    left: 50px;
    transition: 0.5s;
    -moz-transition: 0.5s; /* Firefox 4 */
    -webkit-transition: 0.5s; /* Safari and Chrome */
    -o-transition: 0.5s; /* Opera */
    transform: rotate(180deg);
    -ms-transform: rotate(180deg); 	/* IE 9 */
    -moz-transform: rotate(180deg); 	/* Firefox */
    -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
    -o-transform: rotate(180deg); 	/* Opera */
  }
  .header-wrapper-move-sty-right {
    left: 15%;
    transition: 0.5s;
    -moz-transition: 0.5s; /* Firefox 4 */
    -webkit-transition: 0.5s; /* Safari and Chrome */
    -o-transition: 0.5s; /* Opera */
    transform: rotate(360deg);
    -ms-transform: rotate(360deg); 	/* IE 9 */
    -moz-transform: rotate(360deg); 	/* Firefox */
    -webkit-transform: rotate(360deg); /* Safari 和 Chrome */
    -o-transform: rotate(360deg); 	/* Opera */
  }
  .languageSty {
    position: absolute;
    top: 10px;
    right: 200px;
    background: #409EFF;
    border-radius: 5px;
    .el-dropdown-link {
      display: inline-block;
      padding: 10px;
      cursor: pointer;
      color: #fff;
      font-size: 12px;
    }
    .el-icon-arrow-down {
      font-size: 14px;
    }
  }
  .user-info {
    height: 60px;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    right: 20px;
    color: #fff;
    font-size: 15px;
    .userName {
      margin: 0 10px 0 5px;
      color: orange;
    }
    .loginBtn {
      display: inline-block;
      background: #409EFF;
      padding: 5px 10px;
      border-radius: 3px;
      font-size: 13px;
    }
  }
}
</style>