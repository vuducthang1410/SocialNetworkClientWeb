import { createSlice } from "@reduxjs/toolkit"

interface Authencation{
    isAuthencation:boolean
}
const initialState:Authencation={
    isAuthencation:false
}
const authencationSlide=createSlice({
    name:'authencation',
    initialState,
    reducers:{
        setAuthencation:(state)=>{
            state.isAuthencation=!state.isAuthencation
        }
    }
})
export const {setAuthencation}=authencationSlide.actions;
export default authencationSlide.reducer;