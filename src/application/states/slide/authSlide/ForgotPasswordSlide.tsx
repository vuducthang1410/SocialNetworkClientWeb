import { createSlice } from "@reduxjs/toolkit";
import ForgotPassword from "domain/entities/ForgotPassword";
import type { PayloadAction } from "@reduxjs/toolkit";
const initialState: ForgotPassword = {
  email: "",
  isSuccess: false,
};
const forgotPasswordSlide = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {
    setPassword: (state: ForgotPassword, action: PayloadAction<string>) => ({
      ...state,
      email: action.payload,
    }),
    setSuccess: (state: ForgotPassword, action: PayloadAction<Boolean>) => ({
      ...state,
      isSuccess: action.payload,
    }),
    clearData: (state: ForgotPassword) => {
      state.email = "";
      state.isSuccess = false;
    },
  },
});
export const {setPassword,setSuccess,clearData}=forgotPasswordSlide.actions;
export default forgotPasswordSlide.reducer
