import { toast } from "react-toastify";
import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import { LOGIN } from "../actions/actionTypes";
import { CredentialType, loginSuccessAction, loginFailedAction } from "../actions/auth";

type loginActionType = {
  type: String,
  credential: CredentialType
}

function* onLogin(action: loginActionType):any {
  const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(action.credential.username !== 'Roman' || action.credential.password !== '@'){
        console.log(action)
        reject('something went wrong')
      }
      else{
        resolve('done')
      }
    },1500)
  })
  try {
    const data = yield myPromise
    yield(put(loginSuccessAction()))
  } catch (error) {
    toast.warn('Username or Password is wrong')
    yield(put(loginFailedAction()))
  }
}

function* watchOnLogin() {
  yield takeEvery(LOGIN, onLogin);
}

export default function* authSaga() {
  yield all([fork(watchOnLogin)]);
}
