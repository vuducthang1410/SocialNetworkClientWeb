import UserLogin from "domain/entities/UserLogin";
import UserSignup from "domain/entities/UserSignup";
import React from "react";

export const handleTextInput = (
  userLogin: UserLogin,
  setUserLogin: React.Dispatch<React.SetStateAction<UserLogin>>,
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const { name, value } = e.target;
  setUserLogin({ ...userLogin, [name]: value });
};
export const confirmPassword = (password: string, confirmPassword: string) => {
  return password === confirmPassword;
};
export const handleTextInputSignUp = (
  userSignup: UserSignup,
  setUserSignup: React.Dispatch<React.SetStateAction<UserSignup>>,
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const { name, value } = e.target;
  setUserSignup({ ...userSignup, [name]: value });
};
