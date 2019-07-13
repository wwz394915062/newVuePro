<template>
  <div class="loginRoot" ref="loginRootBg" :style="bgImage">
    <div class="loginMode">
      <template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户名登陆" name="first">
            <div class="loginMode-input">
              <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlignA">
                <el-form-item label="用户">
                  <el-input v-model="formLabelAlignA.name" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" placeholder="请输入密码">
                  <el-input v-model="formLabelAlignA.passward"></el-input>
                  <i class="el-icon-view paswFlag"></i>
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
          <el-tab-pane label="短信登陆" name="second">
            <div>
              <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlignB">
                <el-form-item label="手机号" placeholder="请输入手机号">
                  <el-input v-model="formLabelAlignB.phone"></el-input>
                </el-form-item>
                <el-form-item label="验证码">
                  <el-input type="password" v-model="formLabelAlignB.verificationCode" placeholder="请输入短信验证码"></el-input>
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
        </el-tabs>
      </template>
      <button class="btnClick" @click="btnClick">登陆</button>
    </div>
  </div>
</template>
    transform: translateX(270px);
<script>
export default {
  data () {
    return {
      activeName: 'first',
      bgImage: {
        background: `url(${require('@/assets/images/login.png')})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
      },
      labelPosition: 'right',
      formLabelAlignA: {
        name: 'admin',
        passward: '123456'
      },
      formLabelAlignB: {
        phone: 'admin',
        verificationCode: ''
      }
    }
  },
  created() {
    
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    btnClick () {
      let formLabelAlign
      if (this.activeName === 'first') {
        formLabelAlign = this.formLabelAlignA.name
      } else {
        formLabelAlign = this.formLabelAlignB.verificationCode
      }
      sessionStorage.setItem('user', JSON.stringify(formLabelAlign))
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
  .loginRoot {
    height: 100%;
    .loginMode {
      width: 400px;
      height: 300px;
      background: #ddd;
      position: absolute;
      right: 200px;
      bottom: 150px;
      border-radius: 5px;
      .loginMode-input {
        position: relative;
        padding-top: 20px;
        .paswFlag {
          position: absolute;
          right: 10px;
          top: 13px;
          cursor: pointer;
          font-size: 18px;
          opacity: 0.8;
        }
      }
      .btnClick {
        width: 80%;
        height: 40px;
        border: none;
        border-radius: 20px;
        background: orange;
        color: #fff;
        outline: none;
        cursor: pointer;
      }
    }
  }
</style>
<style lang="scss">
  .loginRoot {
    .loginMode {
      .el-tabs__content {
        padding-right: 50px;
      }
      .el-tabs__nav-scroll {
        width: 100% !important;
        background: orange;
        border-radius: 5px;
        .el-tabs__nav {
          width: 100% !important;
          display: flex;
          .el-tabs__active-bar {
            background: #000 !important;
          }
          .el-tabs__item {
            flex: 1;
            color: #fff;
          }
          .is-active {
            color: #000;
          }
        }
      }
    }
  }
</style>
