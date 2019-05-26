const app = {
  state: {
    //中英文
    lang: localStorage.lang || 'zh'
  },
  mutations: {
    //中英文
    SET_LANGUAGE: (state, lang) => {
      state.lang = lang.lang
      localStorage.setItem('lang', lang.lang)
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