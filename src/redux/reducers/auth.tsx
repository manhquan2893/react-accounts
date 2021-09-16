import { ActionType, LOGIN, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT } from "../actions/actionTypes"

export const authState = {
  user: null,
  isAuthenticated: false
}

export default (state = authState, action: ActionType) => {
  switch (action.type) {
    case LOGIN: 
      return {...state, isGlobalLoading: true }
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true, isGlobalLoading: false}
    case LOGIN_FAILED:
      return { ...state, isAuthenticated: false, isGlobalLoading: false}
    case LOGOUT:
      return { ...state, isAuthenticated: false}
    default:
      return state
  }
}