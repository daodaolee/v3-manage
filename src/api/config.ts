import Axios from 'axios';
const baseURL = "/api"

const axios = Axios.create({
  baseURL,
  timeout: 20000
})

axios.interceptors.request.use(response => {
  return response
}, err => {
  return Promise.reject(err)
})

axios.interceptors.response.use(response => {
  return response.data
}, err => {
  return Promise.reject(err)
})

export default axios