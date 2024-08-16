import { handlerResetPassword, handlerSignup } from "application/states/handler/auth/authHandler";
import { ActionType } from "domain/enums/ActionTypeSaga";
import { takeLatest } from "redux-saga/effects";
export  function* watchAuth(){
    yield takeLatest("abc",handlerResetPassword);
}
export function* watchSignUp(){
    yield takeLatest(ActionType.SIGN_UP,handlerSignup)
}