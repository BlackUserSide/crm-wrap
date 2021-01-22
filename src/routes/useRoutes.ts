import { LoginPage } from "../components/LoginPage/LoginPage";
import { BasesWrapper } from "../components/MainCabinet/CabinetAdmin/BasesWrapper/BasesWrapper";
import { CabinetAdmin } from "../components/MainCabinet/CabinetAdmin/CabinetAdmin";
import { ChatWrapper } from "../components/MainCabinet/CabinetAdmin/ChatWrapepr/ChatWrapper";
import { ListUsersWrapper } from "../components/MainCabinet/CabinetAdmin/UsersWrapper/ListUsers/ListUsersWrapper";
import { RegisterUser } from "../components/MainCabinet/CabinetAdmin/UsersWrapper/RegisterUser";
import { UsersWrapper } from "../components/MainCabinet/CabinetAdmin/UsersWrapper/UsersWrapperAdmin";
import { CabinetWrapper } from "../components/MainCabinet/CabinetWrapper";
import { UserCabinet } from "../components/MainCabinet/UserCabinet/UserCabinet";
import { TRoutesWrapper } from "./RoutesContext";

export const useRoutes: TRoutesWrapper = {
  routes: [
    { path: "/", exact: true, component: LoginPage, routes: [] },
    {
      path: "/cabinet",
      exact: false,
      component: CabinetWrapper,
      routes: [
        {
          path: "/cabinet/job",
          exact: false,
          component: UserCabinet,
          routes: [],
        },
        {
          path: "/cabinet/admin",
          exact: false,
          component: CabinetAdmin,
          routes: [
            {
              path: "/cabinet/admin/users",
              exact: false,
              component: UsersWrapper,
              routes: [
                {
                  path: "/cabinet/admin/users/reg",
                  exact: false,
                  component: RegisterUser,
                  routes: [],
                },
                {
                  path: "/cabinet/admin/users",
                  exact: true,
                  component: ListUsersWrapper,
                  routes: [],
                },
              ],
            },
            {
              path: "/cabinet/admin/databases",
              exact: false,
              component: BasesWrapper,
              routes: [],
            },
            {
              path: "/cabinet/admin/chat",
              exact: false,
              component: ChatWrapper,
              routes: [],
            },
          ],
        },
      ],
    },
  ],
};
