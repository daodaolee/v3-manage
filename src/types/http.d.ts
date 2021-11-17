
export interface IUserResp {
  code?: string | number;
  data?: string | object;
  msg?: string;
}
export interface IUserReq {

}
export interface ILeftNavData {
  key: string | number;
  name: string;
  path: string;
  icon?: any;
  children?: Array<[]>;
  hidden?: boolean
}
export interface ILeftNavResp {
  code: string | number;
  data: Array<ILeftNavData>
}