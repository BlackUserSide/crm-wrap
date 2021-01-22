import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { loginUser } from "../api/users";

import { IDataLogin } from "./type";
export const LoginForm: React.FC = () => {
  const [dataLogin, setDataLogin] = useState<IDataLogin>({
    login: "",
    password: "",
  });
  let history = useHistory();
  const [message, setMessage] = useState<string | undefined>(undefined);
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser(dataLogin.login, dataLogin.password)
      .then((res) => {
        if (res) {
          switch (res.status) {
            case 200:
              localStorage.setItem("token", res.data.token);
              history.push("/cabinet");
              break;
            case 412:
              setMessage("Неправильный логин или пароль");
              setTimeout(() => {
                setMessage(undefined);
              }, 5500);
              break;
            case 204:
              setMessage("Неправильный логин или пароль");
              setTimeout(() => {
                setMessage(undefined);
              }, 5500);
              break;
          }
        }
      })
      .catch((err) => console.log(err));
  };
  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setDataLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(dataLogin);
  return (
    <form className="login-form" onSubmit={submitHandler}>
      <h1 className="h1">Вход в систему</h1>
      <div className="err-form-login">
        <span>{message}</span>
      </div>
      <div className="inp-wrapper">
        <input
          type="text"
          name="login"
          placeholder="Логин"
          onChange={changeHandler}
        />
      </div>
      <div className="inp-wrapper">
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          onChange={changeHandler}
        />
      </div>
      <button type="submit">Вход</button>
    </form>
  );
};
