import React, { FormEvent, useState } from "react";
import { registerUser } from "../../../api/users";
import { IFormRegister } from "./type";

export const FormUsersAdd: React.FC = () => {
  const [dataForm, setDataForm] = useState<IFormRegister>({
    id: undefined,
    name: "",
    password: "",
    login: "",
    lastName: "",
  });
  const [message, setMessage] = useState<string | undefined>(undefined);
  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const val = e.currentTarget.value;
    setDataForm((prev) => ({
      ...prev,
      [name]: val,
    }));
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerUser(dataForm)
      .then((res) => {
        if (res) {
          switch (res.status) {
            case 201:
              setMessage("Пользователь создан");
              setTimeout(() => {
                setMessage(undefined);
              }, 7000);
              break;
            case 400:
              setMessage("Пользователь существует");
              setTimeout(() => {
                setMessage(undefined);
              }, 7000);
              break;
            case 500:
              setMessage("Ошибка сервера!! ЗВОНИ НАМ!!!");
              setTimeout(() => {
                setMessage(undefined);
              }, 7000);
              break;
          }
        }
      })
      .catch((err) => console.log(err));
  };
  console.log(dataForm);

  return (
    <form className="form-add-users" onSubmit={submitHandler}>
      <div
        className={`err-form-wrapper ${
          message
            ? `active-err ${message === "Пользователь создан" ? "god-err" : ""}`
            : ""
        }`}
      >
        <p>{message}</p>
      </div>
      <div className="input-wrapper">
        <label>Имя</label>
        <input type="text" name="name" onChange={changeHandler} />
      </div>
      <div className="input-wrapper">
        <label>Фамилия (Прозвище)</label>
        <input type="text" name="lastName" onChange={changeHandler} />
      </div>
      <div className="input-wrapper">
        <label>Логин</label>
        <input type="text" name="login" onChange={changeHandler} />
      </div>
      <div className="input-wrapper">
        <label>Пароль</label>
        <input type="password" name="password" onChange={changeHandler} />
      </div>
      <div className="btn-wrapper">
        <button className="btn-wrapper-form" type="submit">
          Зарегестрировать
        </button>
      </div>
    </form>
  );
};
