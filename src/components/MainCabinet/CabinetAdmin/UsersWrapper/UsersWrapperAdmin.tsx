import React from "react";
import { Switch } from "react-router-dom";
import { RouteWithSubRoutes } from "../../../../routes/RouteWithSubRoutes";
import "./usersadd.sass";
type TPropts = {
  routes: any;
};
export const UsersWrapper: React.FC<TPropts> = ({ routes }) => {
  return (
    <div className="users-wrapper-admin">
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
