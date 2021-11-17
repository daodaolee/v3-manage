import axios from '../config'
import { IUser, IUserResp, ILeftNavResp } from "@/types"
// 登录
export async function login(params: IUser): Promise<IUserResp> {
  const { username, password } = params
  return await axios.get('/login', { params: { username, password } })
}

// 左侧菜单
export async function getLeftNav(): Promise<ILeftNavResp> {
  return await axios.get('/getLeftNav')
}