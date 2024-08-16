import Header from "presentation/components/Header";
import Menu from "presentation/components/Menu";
import Tabar from "presentation/components/Tabar";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

type Props = {};

const PrivateRouter = (props: Props) => {
  const isAuthenticate = false;
  return isAuthenticate ? (
    <>
      <div className="h-[68px]">
        <Header />
      </div>
      <div className="flex h-screen">
        <div className="w-1/5 bg-white">
          <Menu />
        </div>

        <div className="w-3/5 flex justify-center h-full ">
          <Outlet />
        </div>
        <div className="w-1/5 bg-white">
          <Tabar />
        </div>
      </div>
    </>
  ) : (
    <Navigate to={"/auth/login"}></Navigate>
  );
};

export default PrivateRouter;
