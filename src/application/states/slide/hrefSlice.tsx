import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Href{
    actionHref:string
}
const initialState:Href={
    actionHref:'/'
}
const hrefSlide=createSlice({
    name:'href',
    initialState,
    reducers:{
        setLocationHref:(state,action:PayloadAction<string>)=>{
            state.actionHref=action.payload
        }
    }
})
export const {setLocationHref}=hrefSlide.actions;
export default hrefSlide.reducer;