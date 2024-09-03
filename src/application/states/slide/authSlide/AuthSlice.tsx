import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import AuthData from "domain/entities/AuthData"

const initialState:AuthData={
    accessToken:'',
    userId:'',
    firstName:'',
    lastName:'',
    urlAvatar:'',
    isComplete:''
}
const authSlide=createSlice({
    name:'auth',
    initialState,
    reducers:{
        loginSuccess:(state,action:PayloadAction<AuthData>)=>{
            return {
                ...state,...action.payload
            }
        }
    }
})
export const {loginSuccess}=authSlide.actions;
export default authSlide.reducer;