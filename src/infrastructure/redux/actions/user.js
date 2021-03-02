import { LOGIN_USER, LOGIN_USER_FAILED, LOGIN_USER_SUCCESS } from '../constants/user'

export const actionLoginUser = () => ({
  type: LOGIN_USER,
})
export const actionLoginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  user,
})
export const actionLoginUserFailed = () => ({
  type: LOGIN_USER_FAILED,
})
