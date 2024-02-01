import { IUser } from "../../types/Use.types";
import { ADD_USER } from "../actions/user.action";

const INITIAL_STATE = {
  token: '',
  user: {
    id: '',
    name: '',
    email: '',
    password: '',
    created_at: '',
    uid: '',
    isAdmin: '',
  }
};


const userReducer = (
  state = INITIAL_STATE,
  action: {
    type: string;
    payload: IUser
  }
) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      }
    default:
      return state;
  }
};

export default userReducer;