<template>
  <div class="container">
    <HeaderBar @widthChange="widthChange"/>
    <div class="content-inner">
      <div class="navbar-wrapper" ref="navBarWidth">
        <navigation/>
      </div>
      <div class="content-wrapper" ref="contentWidth">
        <router-view/>
      </div>
    </div>
    <!-- <FooterBar/> -->
  </div>
</template>

<script>
import $ from 'jquery'
import HeaderBar from './HeaderBar'
import FooterBar from './FooterBar'

export default {
  data () {
    return {
      navBarWidth: ''
    }
  },
  methods: {
    widthChange () {
      let winWidth = $(window).width()
      let navWidth = $('.navbar-wrapper').width()
      this.$nextTick(() => {
        if (!this.$store.state.app.foldFlag) {
          $('.navbar-wrapper').animate({width: '15%'})
          $('.content-wrapper').animate({width: '85%'}, function () {
            $('.el-submenu__title .el-icon-arrow-down').css({'opacity': '1'})
            $('.navRouterName').css({'opacity': '1'})
          })
          $('.nav-menu-fold').removeClass('header-wrapper-move-sty-left')
          $('.nav-menu-fold').addClass('header-wrapper-move-sty-right')
        } else {
          let foldWidth = (1-64/winWidth)*winWidth
          $('.el-submenu__title .el-icon-arrow-down').css({'opacity': '0'})
          $('.navRouterName').css({'opacity': '0'})
          $('.nav-menu-fold').removeClass('header-wrapper-move-sty-right')
          $('.nav-menu-fold').addClass('header-wrapper-move-sty-left')
          $('.navbar-wrapper').animate({width: 50})
          $('.content-wrapper').animate({width: (1-50/winWidth)*winWidth}, function () {
            // this.$store.commit('SET_MENUFOLD')
          })
        }
      })
    }
  },
  components: {
    HeaderBar,
    FooterBar
  }
}
</script>

<style scoped lang="scss">
  .container {
    zoom: 1;
    position: relative;
    height: 100%;
    .content-inner {
      position: absolute;
      width: 100%;
      top: 60px;
      bottom: 0px;
      .navbar-wrapper {
        float: left;
        width: 15%;
        height: 100%;
        background: rgb(56, 93, 174);
        overflow-y: auto
      }
      .content-wrapper {
        float: left;
        width: 85%;
        height: 100%;
        background: #ccc;
      }
    }
    .content-inner::after {
      display: block;
      clear: both;
      content: "";
      visibility: hidden;
      height: 0;
    }
  }
</style>
