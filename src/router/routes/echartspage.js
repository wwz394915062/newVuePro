/* echats图形使用页面 */

const echartspage = resolve => require(['@/views/echartspage/Index'], resolve)
const echartspageLine = resolve => require(['@/views/echartspage/echartspage-line'], resolve)
const echartspageBar = resolve => require(['@/views/echartspage/echartspage-bar'], resolve)

const routes = [
  {
    path: '/index',
    component: echartspage
  },
  {
    path: '/echartspage-line',
    component: echartspageLine
  },
  {
    path: '/echartspage-bar',
    component: echartspageBar
  }
]

export default routes