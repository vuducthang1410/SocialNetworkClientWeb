import { combineReducers } from "@reduxjs/toolkit";
import forgotPasswordSlide from './slide/authSlide/ForgotPasswordSlide'
import SignUpSlide from './slide/authSlide/SignUpSlide'
const reducer=combineReducers({
    forgotPassword:forgotPasswordSlide,
    signUp:SignUpSlide,
})
export type RootState = ReturnType<typeof reducer>;
export default reducer;