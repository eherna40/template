import { LOGIN_USER, LOGIN_USER_FAILED, LOGIN_USER_SUCCESS } from '../constants/user'

const initialState = {
  token: null,
  loading: false,
  error: false,
  user: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_FAILED:
      return {
        ...state,
        error: true,
      }
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
        error: false,
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...action,
        loading: false,
        error: false,
      }

    default:
      return state
  }
}

export default userReducer
