import { DatePicker, Select } from "antd";
import { RootState } from "application/states/Reducers";
import { setAuthencation } from "application/states/slide/authSlide/AuthencationSlide";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import ProfileFormData from "./ProfileFormData";

const { TextArea } = Input;
type Props = {};
const dateFormat = "YYYY/MM/DD";
const UpdateProfile = (props: Props) => {
  const authData = useSelector((state: RootState) => state.auth);
  const [profileFormData, setProfileFormData] = useState<ProfileFormData>({
    userId: authData.userId,
    dateOfBirth: "",
    describe: "",
    address: "",
    email: "",
    gender: "",
    relationshipStatus: "",
  });
  const authencation = useSelector((state: RootState) => state.authencation);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const choiseAvatarRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const onChooseFile = () => {
    choiseAvatarRef.current?.click();
  };
  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setProfileFormData((prevState) => ({ ...prevState, avatar: file }));
    }
  };
  const handleInputChange = (field: keyof ProfileFormData, value: any) => {
    setProfileFormData((prevState) => ({ ...prevState, [field]: value }));
  };
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };
  const updateProfile = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(profileFormData)
  };
  useEffect(() => {
    console.log(authData.isComplete);
    console.log(authencation.isAuthencation);
    if (!authencation.isAuthencation) {
      navigate("/auth/login");
    } else {
      if (authData.isComplete !== "N" && !authencation.isAuthencation) {
        dispatch(setAuthencation());
        navigate("/auth/login");
      }
    }
  });
  useEffect(() => {
    if (selectedFile != null) console.log(selectedFile);
  }, [selectedFile]);
  return (
    <div>
      <header className="w-full text-center my-10">
        {"Cập nhật thông tin cá nhân"}
      </header>
      <form
        className="flex justify-center items-center flex-col gap-5"
        onSubmit={updateProfile}
        method="POST"
      >
        <div className="flex flex-col gap-2">
          <div>
            <label htmlFor="">{"Giới tính: "}</label>
            <Select
              style={{ width: 100 }}
              placeholder={"Giới tính"}
              onChange={(value) => handleInputChange("gender", value)}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                { value: "1", label: "Nam" },
                { value: "0", label: "Nữ" },
                { value: "2", label: "Khác" },
              ]}
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              name="email"
              onChange={(e) =>
                handleInputChange("email", e.target.value.toString)
              }
            />
          </div>
          <div>
            <label>Ngày sinh: </label>
            <DatePicker
              name="dateOfBirth"
              placeholder={"Ngày sinh"}
              format={dateFormat}
              onChange={(date) => handleInputChange("dateOfBirth", date)}
            />
          </div>
          <div>
            <label>Ảnh đại diện: </label>
            <button
              onClick={() => {
                onChooseFile();
              }}
            >
              {"Chọn ảnh đại diện"}
            </button>
            <img
              className="h-24 w-24 rounded-full"
              src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-may-tinh-dep-a-19-1.jpg"
              alt="ảnh đại diện nè"
            />
            <input
              type="file"
              ref={choiseAvatarRef}
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleOnChange}
            ></input>
          </div>
          <div>
            <label>{"Quê quán: "}</label>
            <Select
              style={{ width: 150 }}
              placeholder={"Tỉnh/Thành phố"}
              onChange={(value) => handleInputChange("address", value)}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                { value: "1", label: "Hà Nội" },
                { value: "0", label: "Yên Bái" },
                { value: "2", label: "Nam Định" },
              ]}
            />
          </div>
          <div>
            <label>Mô tả</label>
            <TextArea
              name="address"
              placeholder="Mô tả thêm và bản thân bạn"
              autoSize={{ minRows: 1, maxRows: 5 }}
              onChange={(e) => handleInputChange("describe", e.target.value)}
            />
          </div>
          <div>
            <label>{"Trạng thái mối quan hệ: "}</label>
            <Select
              style={{ width: 150 }}
              placeholder={"Tình trạng mối quan hệ"}
              onChange={(value) =>
                handleInputChange("relationshipStatus", value)
              }
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                { value: "0", label: "Khác" },
                { value: "1", label: "Độc thân" },
                { value: "2", label: "Hẹn hò" },
                { value: "3", label: "Tìm hiểu" },
                { value: "4", label: "Đã kết hôn" },
              ]}
            />
          </div>
        </div>
        <button type="submit">{"Lưu"}</button>
      </form>
      <footer></footer>
    </div>
  );
};

export default UpdateProfile;
