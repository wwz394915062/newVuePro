/* echats图形使用页面 */
import layout from '@/components/layout/Index'

const echatspage = resolve => require(['@/views/echatspage/Index'], resolve)

const routes = [{
  path: '/echatspage',
  component: layout,
  children: [{
    path: '',
    component: echatspage
  }]
}]

export default routes