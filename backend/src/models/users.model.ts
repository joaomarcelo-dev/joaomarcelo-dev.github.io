import prisma from "../providers/prisma.provider"
import { IUserCreate, IUserLogin } from "../types/User.type"

const createUser = async ({ email, name, password, uid }: IUserCreate) => {
  const userCreated = await prisma.users.create({
    data: {
      email,
      name,
      password,
      uid,
    },
  });

  return userCreated;
}

const getUserByAccount = async ({ email, uid, password }: IUserLogin) => {
  const user = await prisma.users.findFirst({
    where: {
      uid,
    },
  });

  if (!user) return await prisma.users.findFirst({
    where: {
      email,
      password,
    },
  })

  return user;
}

const userModel = {
  createUser,
  getUserByAccount,
}

export default userModel;
