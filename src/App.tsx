import store from "application/states/ConfigStore";
import Header from "presentation/components/Header";
import Menu from "presentation/components/Menu";
import Tabar from "presentation/components/Tabar";
import ErrorPage from "presentation/pages/ErrorPage/ErrorPage";
import HomePage from "presentation/pages/HomePage/HomePage";
import LoginPage from "presentation/pages/LoginPage/LoginPage";
import SignUpPage from "presentation/pages/SignUpPage/SignUpPage";
import PrivateRouter from "presentation/routers/PrivateRouter";
import { Provider } from "react-redux";
import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<LoginPage />} path="/auth/login" />
          <Route element={<SignUpPage/>} path="/auth/sign-up"/>
          <Route element={<PrivateRouter />}>
            <Route element={<HomePage />} path="/" />
          </Route>
          <Route element={<ErrorPage/>} path="*"/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

