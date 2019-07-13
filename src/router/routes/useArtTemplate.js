/* art-template使用页面 */

const useArtTemplateFor = resolve => require(['@/views/useArtTemplate/template-for'], resolve)

const routes = [
  {
    path: '/template-for',
    component: useArtTemplateFor
  }
]

export default routes