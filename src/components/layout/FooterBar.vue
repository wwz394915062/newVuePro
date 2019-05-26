<template>
  <div class="footer-wrapper">
    <h1>{{ $t('message.底部') }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // title: 'footer'
    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
  .footer-wrapper {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 80px;
    background: gray;
    color: black;
  }
</style>
