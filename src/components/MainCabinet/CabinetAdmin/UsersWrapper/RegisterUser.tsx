import React from "react";
import { FormUsersAdd } from "./FormUsersAdd";

export const RegisterUser: React.FC = () => {
  return (
    <div className="register-user-wrapper">
      <div className="top-line">
        <h1 className="h1">Регистрация пользователя</h1>
      </div>
      <FormUsersAdd />
    </div>
  );
};
