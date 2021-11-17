import { IUserState } from "@/types/store"
const state = {
  userInfo: {}
}
const mutations = {
  SETUSERINFO(state: IUserState, data: IUserState) {
    state.userInfo = data
    localStorage.setItem("userInfo", JSON.stringify(data))
  }
}
const actions = {

}
const getters = {
  userInfo(state: IUserState) {
    const userInfo = localStorage.getItem("userInfo")
    if (userInfo && JSON.stringify(userInfo) !== "{}") {
      state.userInfo = JSON.parse(userInfo)
      return JSON.parse(userInfo)
    } else {
      return false
    }
  }
}
export default {
  namespace: true,
  state,
  mutations,
  actions,
  getters
}