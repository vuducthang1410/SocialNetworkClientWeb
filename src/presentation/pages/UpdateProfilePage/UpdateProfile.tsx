import { Select } from "antd";
import { RootState } from "application/states/Reducers";
import { setAuthencation } from "application/states/slide/authSlide/AuthencationSlide";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

type Props = {};

const UpdateProfile = (props: Props) => {
  const authData = useSelector((state: RootState) => state.auth);
  const authencation = useSelector((state: RootState) => state.authencation);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   useEffect(() => {
  //     console.log(authData.isComplete);
  //     console.log(authencation.isAuthencation);
  //     if (!authencation.isAuthencation) {
  //       navigate("/auth/login");
  //     } else {
  //       if (authData.isComplete !== "N" && !authencation.isAuthencation) {
  //         dispatch(setAuthencation());
  //         navigate("/auth/login");
  //       }
  //     }
  //   });
  return (
    <div>
      <header></header>
      <div>
        <div>
          <label htmlFor=""></label>
          <Select
            style={{ width: 100 }}
            placeholder={"Giới tính"}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: "1", label: "Nam" },
              { value: "0", label: "Nữ" },
              { value: "2", label: "Khác" },
            ]}
          />
          
        </div>
      </div>
      <footer></footer>
      UpdateProfile
    </div>
  );
};

export default UpdateProfile;
