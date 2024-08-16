import { setSuccess } from "application/states/slide/authSlide/ForgotPasswordSlide";
import axios from "axios";
import UserSignup from "domain/entities/UserSignup";
import { ActionType } from "domain/enums/ActionTypeSaga";
import sendRequestGetLinkResetPassword from "infrastructure/api/authAPI";
import { call, put } from "redux-saga/effects";
interface SignUpAction {
    type: ActionType.SIGN_UP;
    payload: UserSignup;
}
export function* handlerResetPassword(){
    try {
        const response=sendRequestGetLinkResetPassword("");
        yield put(setSuccess(true))
    } catch (error) {
        
    }
}
export function* handlerSignup(action:SignUpAction){
    try{
        console.log(action.payload)
        const response=axios.post("");
        yield put(setSuccess(true))
    }catch(error){

    }
}