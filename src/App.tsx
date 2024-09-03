import { patch } from "@mui/material";
import store from "application/states/ConfigStore";
import ErrorPage from "presentation/pages/ErrorPage/ErrorPage";
import FriendPage from "presentation/pages/FriendPage/FriendPage";
import GroupPage from "presentation/pages/GroupPage/GroupPage";
import HomePage from "presentation/pages/HomePage/HomePage";
import LoginPage from "presentation/pages/LoginPage/LoginPage";
import MessagePage from "presentation/pages/MessagePage/MessagePage";
import NotifyPage from "presentation/pages/NotifyPage/NotifyPage";
import SetttingPage from "presentation/pages/SettingPage/SetttingPage";
import SignUpPage from "presentation/pages/SignUpPage/SignUpPage";
import UpdateProfile from "presentation/pages/UpdateProfilePage/UpdateProfile";
import PrivateRouter from "presentation/routers/PrivateRouter";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<LoginPage />} path="/auth/login" />
          <Route element={<SignUpPage />} path="/auth/sign-up" />
          <Route element={<PrivateRouter />}>
            <Route element={<HomePage />} path="/" />
            <Route element={<FriendPage />} path="/friend" />
            <Route element={<MessagePage />} path="/message" />
            <Route element={<NotifyPage />} path="/profile" />
            <Route element={<SetttingPage />} path="/setting" />
            <Route element={<GroupPage />} path="/group" />
          </Route>
          <Route element={<UpdateProfile />} path="/update-profile" />
          <Route element={<ErrorPage />} path="*" />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
