import { toast } from "react-toastify"
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from "./actionTypes"

export type CredentialType = {
  username: String,
  password: String
}
export const loginAction = (payload: CredentialType) => {
    return {
      type: LOGIN,
      credential: payload
    }
}
export const loginSuccessAction = () => {
    return {
      type: LOGIN_SUCCESS
    }
}
export const loginFailedAction = () => {
    return {
      type: LOGIN_FAILED
    }
}
export const logoutAction = () => {
    return {
      type: LOGOUT
    }
}