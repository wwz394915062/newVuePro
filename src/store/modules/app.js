const app = {
  state: {
    // 用户登陆状态
    loginState: '登陆',
    // 中英文
    lang: localStorage.lang || 'zh',
    // 导航栏折叠
    foldFlag: false
  },
  mutations: {
    // 中英文
    SET_LANGUAGE: (state, lang) => {
      state.lang = lang.lang
      localStorage.setItem('lang', lang.lang)
    },
    SET_MENUFOLD: (state) => {
      state.foldFlag = !state.foldFlag
    }
  },
  actions: {
    setLanguage: ({ commit }, lang) => {
      console.log(lang)
      commit('SET_LANGUAGE', lang)
    }
  }
}

export default app