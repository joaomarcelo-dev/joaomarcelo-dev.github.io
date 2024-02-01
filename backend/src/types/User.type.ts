export type IUser = {
  id?: number,
  name: string,
  email: string,
  password: string,
  uid: string,
}

export type IUserCreate = Omit<IUser, 'id'>


export type IUserLogin = Omit<IUser, 'name'>