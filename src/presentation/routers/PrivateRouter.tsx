import { RootState } from "application/states/Reducers";
import { setLocationHref } from "application/states/slide/hrefSlice";
import Header from "presentation/components/Header";
import Menu from "presentation/components/Menu";
import Tabar from "presentation/components/Tabar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

type Props = {};

const PrivateRouter = (props: Props) => {
  const location = useLocation();
  const path = location.pathname + location.search;
  const dispatch = useDispatch();
  const authencation = useSelector((state: RootState) => state.authencation);
  const href = useSelector((state: RootState) => state.href);
  const authData = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  console.log(path);
  useEffect(() => {
    if (authencation.isAuthencation && path !== href.actionHref) {
      navigate("/");
    }
  }, [authencation.isAuthencation, navigate]);
  useEffect(() => {
    if (!authencation.isAuthencation) {
      dispatch(setLocationHref(path));
    }
  }, [path, authencation.isAuthencation]);
  return authencation.isAuthencation ? (
    authData.isComplete === "Y" ? (
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
      <Navigate to={"/update-profile"}></Navigate>
    )
  ) : (
    <Navigate to={"/auth/login"}></Navigate>
  );
};

export default PrivateRouter;
