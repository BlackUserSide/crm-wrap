import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getDataUser } from "../../../api/users";

import "./header.sass";
export const HeaderAdmin: React.FC = () => {
  const [dataUser, setDataUser] = useState({
    name: "",
    lastName: "",
  });
  const history = useHistory();
  useEffect(() => {
    getDataUser()
      .then((res) => {
        if (res) {
          console.log(res);

          switch (res.status) {
            case 200:
              setDataUser(res.data);
              break;
            case 204:
              localStorage.clear();
              history.push("/");
              break;
            case 401:
              localStorage.clear();
              history.push("/");
              break;
          }
        }
      })
      .catch((err) => console.log(err));
  }, [history]);
  return (
    <div className="header-admin">
      <div className="logo-wrapper">
        <Link to="/cabinet">
          <h3 className="h3">CRM-VIRTUOS</h3>
        </Link>
      </div>
      <div className="user-endpoint">
        <span>{`${dataUser.name} ${dataUser.lastName}`}</span>
      </div>
    </div>
  );
};
