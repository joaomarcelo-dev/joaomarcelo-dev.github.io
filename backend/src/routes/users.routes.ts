import { Router } from "express";
import userController from "../controllers/users.controller";

const userRoutes = Router();

userRoutes.route('/')
  .post(
    userController.createNewUser,
  )

export default userRoutes;