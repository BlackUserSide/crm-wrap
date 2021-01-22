import React from "react";
import { IDataUser } from "./type";
type TProps = {
  setDataUser: any;
  dataUser: IDataUser;
};
export const WelcomeUser: React.FC<TProps> = ({ setDataUser, dataUser }) => {
  return (
    <div className="welcome-user-wrapper">
      <div className="welcome-composition-wrapper">
        <div className="text-layout">
          <h1 className="h1">Здравствуй</h1>
          <h3 className="h3">
            {dataUser.name} {dataUser.lastName}
          </h3>
          <p>Нажми что бы начать работу!</p>
          <div className="btn-start">
            <span>Начать</span>
          </div>
        </div>
      </div>
    </div>
  );
};
