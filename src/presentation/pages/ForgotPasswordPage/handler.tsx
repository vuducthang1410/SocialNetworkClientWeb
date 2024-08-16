import ForgotPassword from "domain/entities/ForgotPassword";
import React from "react";

export const handleInputForgotPassword = (
  data: ForgotPassword,
  setData: React.Dispatch<React.SetStateAction<ForgotPassword>>,
  e:React.ChangeEvent<HTMLInputElement>
) => {
    const{name,value}=e.target;
    setData({...data,[name]:value})
};
