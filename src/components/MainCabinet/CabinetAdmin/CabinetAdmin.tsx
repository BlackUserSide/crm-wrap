import React from "react";
import { HeaderAdmin } from "./HeaderCabinet/HeaderAdmin";
import { NavBarAdmin } from "./NavBarAdmin";
import "./cabinetAdmin.sass";
import { Switch } from "react-router-dom";
import { RouteWithSubRoutes } from "../../../routes/RouteWithSubRoutes";
type TProps = {
  routes: any;
};
export const CabinetAdmin: React.FC<TProps> = ({ routes }) => {
  return (
    <div className="cabinet-admin-wrapper">
      <HeaderAdmin />
      <div className="main-content-admin">
        <NavBarAdmin />
        <div className="cabinet-routes-wrapper">
          <Switch>
            {routes
              ? routes.map((route: any, i: any) => (
                  <RouteWithSubRoutes key={i} {...route} />
                ))
              : ""}
          </Switch>
        </div>
      </div>
    </div>
  );
};
