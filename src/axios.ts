import axios from 'axios'
import { BASE_URL } from './constant'

axios.defaults.baseURL = '/'
axios.defaults.timeout = 10000

axios.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  (error: any) => {
    if (error.response.status === 401) {
      console.log('Unauthorized, logging out ...');
      localStorage.clear();
      window.location.href = '/auth/login'
    }
    return Promise.reject(error)
  })

export default axios