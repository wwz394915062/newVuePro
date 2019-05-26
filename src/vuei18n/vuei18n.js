import Vue from 'vue'
import Element from 'element-ui'
import VueI18n from 'vue-i18n'
import messages from './langs'
Vue.use(VueI18n)

// 从localStorage获取语言选择。
const i18n = new VueI18n({
    locale: localStorage.getItem('lang') || 'zh', // 初始未选择默认 zh 中文
    messages,
})
Vue.use(Element, {
    i18n: (key, value) => i18n.t(key, value)
})

export default i18n