import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../../../api/users";
import { IListUsers } from "../type";
import "./preloader.scss";
import { UserItem } from "./UserItem";
export const ListUsersWrapper: React.FC = () => {
  const [dataList, setDataList] = useState<IListUsers>({
    isLoading: true,
    data: [],
  });
  useEffect(() => {
    getAllUsers()
      .then((res) => {
        if (res) {
          setDataList({
            isLoading: false,
            data: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(dataList.data);

  return (
    <div className="list-users-wrapper">
      {dataList.isLoading ? (
        <svg viewBox="0 0 120 120" className="svg-preloader">
          <symbol id="s-circle">
            <circle r="10" cx="10" cy="10"></circle>
          </symbol>
          <rect className="r-bounds" width="100%" height="100%" />
          <g id="circle" className="g-circles">
            <use href="#s-circle" className="u-circle" />
            <use href="#s-circle" className="u-circle" />
            <use href="#s-circle" className="u-circle" />
            <use href="#s-circle" className="u-circle" />
            <use href="#s-circle" className="u-circle" />
            <use href="#s-circle" className="u-circle" />
            <use href="#s-circle" className="u-circle" />
            <use href="#s-circle" className="u-circle" />
            <use href="#s-circle" className="u-circle" />
            <use href="#s-circle" className="u-circle" />
            <use href="#s-circle" className="u-circle" />
            <use href="#s-circle" className="u-circle" />
          </g>
        </svg>
      ) : (
        <div className="content-list-wrapper">
          <div className="top-line">
            <h1 className="h1">Список пользователей</h1>
            <Link to="/cabinet/admin/users/reg">Создать пользователя</Link>
          </div>
          <div className="content-items">
            {dataList.data.map((e, i) => (
              <UserItem content={e} key={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
