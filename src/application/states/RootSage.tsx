import { all, fork } from "redux-saga/effects";
import { watchLogin, watchSignUp } from "./sagas/auth/authSaga";

export default function* rootSaga(){
    yield all([
        fork(watchSignUp),
        fork(watchLogin)
    ])
}