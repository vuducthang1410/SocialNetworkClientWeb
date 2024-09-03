import { combineReducers } from "@reduxjs/toolkit";
import forgotPasswordSlice from './slide/authSlide/ForgotPasswordSlice'
import SignUpSlide from './slide/authSlide/SignUpSlice'
import authSlice from './slide/authSlide/AuthSlice'
import Authencation from './slide/authSlide/AuthencationSlide'
import HrefSlice from './slide/hrefSlice'
const reducer=combineReducers({
    forgotPassword:forgotPasswordSlice,
    signUp:SignUpSlide,
    auth:authSlice,
    authencation:Authencation,
    href:HrefSlice
})
export type RootState = ReturnType<typeof reducer>;
export default reducer;