import { setAuthencation } from "application/states/slide/authSlide/AuthencationSlide";
import { loginSuccess } from "application/states/slide/authSlide/AuthSlice";
import { setSuccess } from "application/states/slide/authSlide/ForgotPasswordSlice";
import axios, { AxiosResponse } from "axios";
import AuthData from "domain/entities/AuthData";
import UserSignup from "domain/entities/UserSignup";
import { ActionType } from "domain/enums/ActionTypeSaga";
import sendRequestGetLinkResetPassword from "infrastructure/api/authAPI";
import URL_API from "infrastructure/UrlAPI";
import { call, put } from "redux-saga/effects";
interface SignUpAction {
  type: ActionType.SIGN_UP;
  payload: UserSignup;
}
interface LogInAction {
  type: ActionType.LOG_IN;
  payload: { username: string; password: string };
}
export function* handlerResetPassword() {
  try {
    const response = sendRequestGetLinkResetPassword("");
    yield put(setSuccess(true));
  } catch (error) {}
}
export function* handlerSignup(action: SignUpAction) {
  try {
    console.log(action.payload);
    const response = axios.post("");
    yield put(setSuccess(true));
  } catch (error) {}
}
export function* handlerLogin(action: LogInAction) {
  try {
    const response: AxiosResponse<{data:AuthData}> = yield call(
      axios.post,
      `${URL_API.URL_DOMAIN}${URL_API.URL_LOG_IN}`,
      action.payload
    );
    const data = response.data;
    console.log(data.data)
    yield put(loginSuccess(data.data));
    yield put(setAuthencation())
  } catch (error) {
    console.log(error);
  }
}
