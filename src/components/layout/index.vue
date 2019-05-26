<template>
  <div class="container">
    <HeaderBar/>
    <div class="content-inner">
      <div class="navbar-wrapper">
        <navigation/>
      </div>
      <div class="content-wrapper">
        <router-view/>
      </div>
    </div>
    <FooterBar/>
  </div>
</template>

<script>
import HeaderBar from './HeaderBar'
import FooterBar from './FooterBar'

export default {
  data () {
    return {

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
    position: relative;
    height: 100%;
    .content-inner {
      position: absolute;
      width: 100%;
      top: 80px;
      bottom: 80px;
      .navbar-wrapper {
        float: left;
        width: 220px;
        height: 100%;
        // background: #aaa;
        overflow-y: auto
      }
      .content-wrapper {
        margin-left: 210px;
        height: 100%;
        background: #ccc;
      }
    }
  }
</style>
