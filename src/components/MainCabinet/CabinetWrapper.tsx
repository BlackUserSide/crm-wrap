import React, { useEffect } from "react";
import { Switch, useHistory } from "react-router-dom";
import { RouteWithSubRoutes } from "../../routes/RouteWithSubRoutes";
import { getDataUser } from "../api/users";
type Tprops = {
  routes: any;
};
export const CabinetWrapper: React.FC<Tprops> = ({ routes }) => {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      getDataUser()
        .then((res) => {
          if (res) {
            switch (res.status) {
              case 200:
                if (res.data.role === "admin") {
                  history.push("/cabinet/admin");
                  return;
                }
                history.push("/cabinet/job");
                break;
              case 401:
                window.location.reload(); // TODO Баг токена. Попроавить в обновлении
                break;
            }
          }
        })
        .catch((err) => console.log(err));
    }
  }, [history]);
  return (
    <div className="cabinet-wrapper">
      <Switch>
        {routes
          ? routes.map((route: any, i: any) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))
          : ""}
      </Switch>
    </div>
  );
};
