import React, { useState } from "react";
import { IDataUser } from "./type";
import { WelcomeUser } from "./WelcomeUser";
import "./userCabinet.sass";
export const UserCabinet: React.FC = () => {
  const [dataUser, setDataUser] = useState<IDataUser>({
    startWork: false,
    name: "Никита",
    lastName: "Филатов",
  });
  return (
    <div className="user-cabinet">
      {dataUser.startWork ? (
        ""
      ) : (
        <WelcomeUser setDataUser={setDataUser} dataUser={dataUser} />
      )}
    </div>
  );
};
