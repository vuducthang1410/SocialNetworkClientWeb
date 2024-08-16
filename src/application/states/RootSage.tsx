import { all } from "axios";
import { fork } from "redux-saga/effects";
import { watchSignUp } from "./sagas/auth/authSaga";

export default function* rootSaga(){
    yield all([
        fork(watchSignUp)
    ])
}