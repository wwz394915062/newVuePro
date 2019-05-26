<template>
  <div class="header-wrapper">
    <h1>{{ $t('message.头部') }}</h1>
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
    }
  },
  computed: {
    ...mapState({
      langdata: (state) => {return state.app.lang}
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
  position: absolute;
  width: 100%;
  top: 0;
  height: 80px;
  background: gray;
  h1 {
    color: black;
  }
  .languageSty {
    position: absolute;
    right: 20px;
    background: #409EFF;
    border-radius: 5px;
    .el-dropdown-link {
      display: inline-block;
      padding: 10px;
      cursor: pointer;
      color: #fff;
    }
    .el-icon-arrow-down {
      font-size: 14px;
    }
  }
}
</style>