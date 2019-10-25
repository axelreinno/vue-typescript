import { BASE_URL, GET_POSTS } from '@/constant'
import axios from '@/axios'

export const actions = {
  async getPosts(
    { commit }: any,
    { params }: any
  ) {
    commit('GET_POSTS')
    try {
      const request = await axios.get(GET_POSTS, { params })
      const payload = request.data
      commit('GET_POSTS_SUCCESS', payload)

    } catch (err) {
      commit('GET_POSTS_ERROR', err.response)
      return Promise.reject(err.response)
    }
  }
}