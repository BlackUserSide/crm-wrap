import React from "react";

import "./App.sass";
import { MainRoutes } from "./routes/MainRouter";
import { RoutesContext } from "./routes/RoutesContext";
import { useRoutes } from "./routes/useRoutes";
export const App: React.FC = () => {
  return (
    <RoutesContext.Provider value={useRoutes}>
      <div className="main-app-wrapper">
        <MainRoutes />
      </div>
    </RoutesContext.Provider>
  );
};
