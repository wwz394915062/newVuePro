import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 获取文件夹routes下的所有路由文件
const routesArray = []

const requireRoutes = require.context('./routes', false, /\.js$/)
requireRoutes.keys().forEach(file => {
  routesArray.push(file.slice(1))
});
// console.log(routesArray)

const routesMap = []

for (let index = 0; index < routesArray.length; index++) {
  const routesPath = require(`./routes${routesArray[index]}`)
  routesMap.push(routesPath.default[0])
}

const router = new Router({
  mode: '',
  routes: [ 
    {
      path: '/',
      redirect: '/homepage'
    },  
   ...routesMap
  ]
})

export default router
