import Vue from 'vue'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

//引入此文件夹下的全部以.vue结尾的文件
const requireComponent = require.context('.', false, /\.vue$/)

//全局注册该文件夹下的组件
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = capitalizeFirstLetter(
    fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})
