import pathify from 'vuex-pathify'

import { state } from './state'
import { mutations } from './mutations'
import { actions } from './actions'

export default {
  namespaced: true,
  plugins: [pathify.plugin],
  state,
  mutations,
  actions
}