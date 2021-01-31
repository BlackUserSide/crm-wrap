import React, { useEffect, useState } from "react";
import { getDataUser } from "../../../api/users";

export const HeaderUserContent: React.FC = () => {
  const [nameUser, setNameUser] = useState<any>();
  useEffect(() => {
    getDataUser().then((res) => {
      if (res) {
        setNameUser({
          name: res.data.name,
          lastName: res.data.lastName,
        });
      }
    });
  }, []);
  return (
    <div className="header-user-content">
      <div className="nick-name">
        <span>{nameUser ? `${nameUser.name} ${nameUser.lastName}` : ""}</span>
      </div>
      <div className="log-out">
        <button
          type="button"
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Выход
        </button>
      </div>
    </div>
  );
};
