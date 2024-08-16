import UserLogin from "domain/entities/UserLogin";

export const handleTextInput = (
    userLogin: UserLogin,
    setUserLogin: React.Dispatch<React.SetStateAction<UserLogin>>,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };
  