import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UserSignup from "domain/entities/UserSignup";

const initialState:UserSignup={
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    confirmPassword:''
}
const signupSlide=createSlice({
    name:'signup',
    initialState,
    reducers:{
        setInitialState:(state:UserSignup,action:PayloadAction<UserSignup>)=>({
            ...state,
            username:action.payload.username,
            password:action.payload.password,
            lastname:action.payload.lastname,
            firstname:action.payload.firstname,
            confirmPassword:action.payload.confirmPassword
        })
    }
})
export const {setInitialState}=signupSlide.actions;
export default signupSlide.reducer