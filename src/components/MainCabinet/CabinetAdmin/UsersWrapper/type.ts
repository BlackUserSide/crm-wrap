export interface IFormRegister {
  id: number | undefined;
  name: string;
  lastName: string;
  password: string;
  login: string;
}
export interface IListUsers {
  isLoading: boolean;
  data: Array<ArrayDataUser>;
}

export type ArrayDataUser = {
  id: number;
  login: string;
  name: string;
  lastName: string;
};
