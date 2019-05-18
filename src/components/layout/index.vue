<template>
  <div class="container">
    <HeaderBar/>
    <div class="content-inner">
      <div class="navbar-wrapper">
        <!-- <navigation/> -->
        <h1>layoutcontent</h1>
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
      padding: 80px 0;
      background: #FABF40;
      .navbar-wrapper {
        float: left;
        width: 20%;
        height: 100%;
        background: green;
      }
      .content-wrapper {
        margin-left: 20%;
        height: 100%;
        background: greenyellow;
      }
    }
  }
</style>
