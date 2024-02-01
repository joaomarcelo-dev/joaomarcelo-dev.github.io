import { IUser } from "../../types/Use.types";

export const ADD_USER = 'ADD_TOKEN';


const addUser = (userData: IUser) => ({
  type: ADD_USER,
  payload: userData,
})

const userActions = {
  addUser,
}

export default userActions;
