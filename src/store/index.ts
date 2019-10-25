import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'

import posts from '@/modules/posts'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [pathify.plugin],
  modules: {
    posts
  }
})
