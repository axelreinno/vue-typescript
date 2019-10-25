import { state } from './state'
import { Posts } from '@/types/posts'

export const mutations = {
  GET_POSTS: (state: any) => {
    state.posts = []
    state.error = false
    state.errorMessage = ''
    state.process = true 
  },
  GET_POSTS_SUCCESS: (state: any, payload: Posts[]) => {
    state.posts = payload
    state.process = false
  },
  GET_POSTS_ERROR: (state: any, error: string) => {
    state.error = true
    state.errorMessage = error
  }
}
