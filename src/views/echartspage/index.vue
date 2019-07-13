<template>
  <div class="">
    <h2>{{ $t('message.图表') }}</h2>
    <el-button type="primary" round @click="goHomePage">{{ $t('message.首页') }}</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '图表使用'
    }
  },
  methods: {
    goHomePage () {
      this.$router.push('/homepage')
    }
  },
  components: {
    
  }
}
</script>

<style scoped lang="">
</style>
