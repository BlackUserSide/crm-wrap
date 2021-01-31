import React, { useEffect, useState } from "react";
import { HeaderUserContent } from "./HeaderUserContent";
//import { IContDataCard } from "./type";
import { changeStatusRes } from "../../../api/users";
import workSvg from "../../../../images/image/system.svg";
import "./usercontent.sass";
import doneIcon from "../../../../images/image/money.svg";
import closeIcon from "../../../../images/image/cancel.svg";
import { getDataCard } from "../../../api/users";
export const UserContent: React.FC = () => {
  const [dataCard, setDataCard] = useState<any>({
    id: 0,
    name: "",
    phone: "",

    address: "",
    status: 0,
    user_id: "",
  });
  useEffect(() => {
    getDataCard().then((ress) => {
      setDataCard(ress.data);
    });
  }, []);
  const changeStatus = async (status: number) => {
    await changeStatusRes(dataCard.id, status).then((res) => console.log(res));
    window.location.reload();
  };
  return (
    <div className="user-content-wrapper">
      <HeaderUserContent />
      <div className="main-content-wrapper">
        <div className="card-client-wrapper">
          <div className="header-card">
            <div className="main-status">
              <div className="status-start">
                <span>
                  <img src={workSvg} alt="" />В работе
                </span>
              </div>
            </div>
            <div className="link-change-status">
              <ul>
                <li>
                  <button
                    type="button"
                    className="green"
                    onClick={() => changeStatus(1)}
                  >
                    <img src={doneIcon} alt="" /> Сняли
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="yellow"
                    onClick={() => changeStatus(2)}
                  >
                    Не дозвон
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="red"
                    onClick={() => changeStatus(3)}
                  >
                    {" "}
                    <img src={closeIcon} alt="" /> Збросил
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-card-content">
          <div className="name-client">
            <h1 className="h1">Имя: {dataCard.name}</h1>
          </div>
          <div className="addres-client">
            <h3 className="h3">Адрес: {dataCard.addres}</h3>
          </div>
          <div className="phone-number">
            <h4 className="h4">Номер: {dataCard.phone}</h4>
          </div>
          <div className="phone-number">
            <h4 className="h4">Номер: {dataCard.phone}</h4>
          </div>
          <div className="text-area">
            <textarea cols={30} rows={10}></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};
