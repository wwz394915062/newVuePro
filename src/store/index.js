import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import navigation from './modules/navigation'

Vue.use(Vuex)

// 拿到modules中的所有文件名
// const modulesArr = []

// const requireModules = require.context('./modules', false, /\.js$/)
// requireModules.keys().forEach(fileName => {
//   modulesArr.push(fileName.slice(1))
// });

// const modulsesMap = []

// for (let i = 0; i < modulesArr.length; i++) {
//   const temp = require(`./modules${modulesArr[i]}`)
//   modulsesMap.push(temp.default)
// }
// console.log(...modulsesMap)
const store = new Vuex.Store({
  modules: {
    // ...modulsesMap
    app,
    navigation
  }
})

export default store