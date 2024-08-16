import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import App from "../../App";
import LoginPage from "presentation/pages/LoginPage/LoginPage";
import ForgotPasswordPage from "presentation/pages/ForgotPasswordPage/ForgotPasswordPage";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      { path: "auth/sign-up", element: <SignUpPage /> },
      {
        path: "auth/forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "auth/login",
        element: <LoginPage />,
      },
    ],
  },
]);
