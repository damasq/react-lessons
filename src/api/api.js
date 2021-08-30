import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '266ddfa8-4aae-47a4-878f-c9bc0f4ed4dd'
  }
})

export const UsersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },

  follow(userId) {
    debugger
    return instance.post(`follow/${userId}`)
  },

  unfollow(userId) {
    debugger
    return instance.delete(`follow/${userId}`)
  }
}