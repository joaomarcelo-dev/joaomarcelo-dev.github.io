import userModel from '../models/users.model';
import jwtProvider from '../providers/token.provider';
import { ServiceResponseType } from '../types/ServiceResponse.type';
import { IUserCreate } from './../types/User.type';

const createNewUser = async ({ email, name, password, uid }: IUserCreate): Promise<ServiceResponseType> => {
  try {
    const useCreated = await userModel.createUser({
      email,
      name,
      password, 
      uid,
    });

    return {
      data: useCreated,
      message: 'User created successfully',
      status: 201,
    };

  } catch (error) {
    return {
      message: 'Error creating user',
      data: {},
      status: 500,
    }
  }

}

const loginUserService = async ({ uid, email, password }: IUserCreate): Promise<ServiceResponseType> => {
  const user = await userModel.getUserByAccount({ email, uid, password });

  if (!user) {
    return {
      message: 'User not found',
      data: {},
      status: 404,
    }
  }

  const token = jwtProvider.generateToken({ uid: user.uid, email: user.email });

  return {
    message: 'User logged in successfully',
    data: {
      token,
      user,
    },
    status: 200,
  }
}

const userServices = {
  createNewUser,
  loginUserService,
}

export default userServices;

