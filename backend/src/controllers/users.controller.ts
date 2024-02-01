import { Request, Response } from "express";
import userServices from "../services/users.service";

const createNewUser = async (req: Request, res: Response) => {
  const { email, name, password, uid } = req.body;

  const { data, status } = await userServices.loginUserService({
    email,
    name,
    password,
    uid,
  });

  return res.status(status).json(data);
};

const userController = {
  createNewUser,
};

export default userController;
