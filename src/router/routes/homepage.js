/* 首页 */
import layout from '@/components/layout/Index'

const Homepage = resolve => require(['@/views/homepage/Index'], resolve)
// console.log(layout)
const routes = [
  {
    path: '/homepage',
    component: layout,
    children: [
      {
        path: '',
        component: Homepage
      }
    ]
  }
]

export default routes