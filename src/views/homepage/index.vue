<template>
  <div class="home-wrapper">
    <h1>{{ $t('message.首页内容') }}</h1>
    <el-button type="primary" round @click="goEchatsPage">{{ $t('message.图页') }}</el-button>

    <!-- <routerView/> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '首页内容'
    }
  },
  methods: {
    goEchatsPage () {
      this.$router.push('/echatspage')
    }
  },
  components: {

  }
}
</script>

<style scoped lang="">
</style>
