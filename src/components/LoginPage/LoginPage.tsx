import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./login.sass";
import { LoginForm } from "./LoginForm";
export const LoginPage: React.FC = () => {
  let history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      history.push("/cabinet");
    }
  }, [history]);
  return (
    <div className="login-page-wrapper">
      <LoginForm />
    </div>
  );
};
