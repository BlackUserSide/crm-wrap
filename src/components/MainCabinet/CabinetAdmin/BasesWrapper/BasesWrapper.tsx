import React, { FormEvent, useState } from "react";
import plus from "../../../../images/plus.svg";
import { DropZone } from "./DropZone";
import "./bases.sass";
import { request } from "../../../api";
export const BasesWrapper: React.FC = () => {
  const [popUp, setPopUp] = useState<boolean>(false);
  const [file, setFile] = useState<any>();
  const changePop = () => {
    if (popUp) {
      setPopUp(false);
      return;
    }
    setPopUp(true);
  };
  const [nameTable, setNameTable] = useState<string>("");
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file);
    formData.append("nameTable", nameTable);
    console.log(formData.getAll("file"), "FORMDATA");
    request({
      method: "POST",
      url: "/excel/add",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const changeName = (e: FormEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    setNameTable(val);
    console.log(val);
  };
  return (
    <div className="bases-wrapper-admin">
      <div className="list-bases-wrapper">
        <div className="add-new-base" onClick={changePop}>
          <img src={plus} alt="" />
          <h1 className="h1">Добавить новую</h1>
        </div>
      </div>
      {popUp ? (
        <div className="pop-up-add-base">
          <div className="bg-lock" onClick={changePop}></div>
          <form
            className="form-add-base"
            encType="multipart/form-data"
            onSubmit={submitHandler}
          >
            <DropZone setFile={setFile} />
            <input
              type="text"
              className="nameTable"
              name="name"
              onChange={changeName}
              placeholder="Название таблицы(На английском)"
            />
            <div className="btn-wrapper">
              <button type="submit">Загрузить</button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
