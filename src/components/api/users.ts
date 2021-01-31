import { request } from ".";
import { IFormRegister } from "../MainCabinet/CabinetAdmin/UsersWrapper/type";

export const registerUser = async (data: IFormRegister) => {
  const res = await request({
    method: "POST",
    url: "/auth/reg",
    data: {
      login: data.login,
      name: data.name,
      password: data.password,
      lastName: data.password,
    },
    validateStatus: () => true,
  });
  return res;
};
export const getAllUsers = async () => {
  const res = await request({
    method: "GET",
    url: "/user/getAll",
    validateStatus: () => true,
  });
  return res;
};
export const loginUser = async (login: string, password: string) => {
  const res = await request({
    method: "POST",
    url: "/auth",
    data: {
      login: login,
      password: password,
    },
    validateStatus: () => true,
  });
  return res;
};
export const getDataUser = async () => {
  const token = localStorage.getItem("token");
  if (token === null) {
    return false;
  }
  const res = await request({
    method: "GET",
    url: "/user/getOne",
    validateStatus: () => true,
  });
  return res;
};

export const deleteUsers = async (id: number) => {
  let response = {
    data: "",
    status: 0,
  };
  await request({
    method: "DELETE",
    url: `/admin/delete_user/${id}`,
    validateStatus: () => true,
  }).then(async (res) => {
    if (res) {
      console.log(res);

      switch (res.status) {
        case 200:
          response = {
            ...response,
            status: res.status,
          };
          break;
        case 401:
          response = {
            ...response,
            status: res.status,
          };
          break;
        case 500:
          response = {
            ...response,
            status: res.status,
          };
          break;
        case 400:
          response = {
            ...response,
            status: res.status,
          };
          break;
      }
    }
  });
  return response;
};
export const getDataCard = async () => {
  let response = {
    data: {},
    status: 0,
  };
  await request({
    method: "GET",
    url: `/client/get`,
    validateStatus: () => true,
  }).then(async (res) => {
    if (res) {
      console.log(res);

      switch (res.status) {
        case 200:
          response = {
            ...response,
            status: res.status,
            data: res.data,
          };

          break;
        case 401:
          response = {
            ...response,
            status: res.status,
          };
          break;
        case 500:
          response = {
            ...response,
            status: res.status,
          };
          break;
        case 400:
          response = {
            ...response,
            status: res.status,
          };
          break;
      }
    }
  });

  return response;
};
export const changeStatusRes = async (id: number, statusReq: number) => {
  let response = {
    data: {},
    status: 0,
  };
  await request({
    method: "PUT",
    url: `/client/change_status/${id}`,
    data: {
      status: statusReq,
    },
    validateStatus: () => true,
  }).then(async (res) => {
    if (res) {
      console.log(res);

      switch (res.status) {
        case 200:
          response = {
            ...response,
            status: res.status,
            data: res.data,
          };

          break;
        case 401:
          response = {
            ...response,
            status: res.status,
          };
          break;
        case 500:
          response = {
            ...response,
            status: res.status,
          };
          break;
        case 400:
          response = {
            ...response,
            status: res.status,
          };
          break;
      }
    }
  });

  return response;
};
