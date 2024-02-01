export type IUser = {
  token: string;
  user: {
    id: string
    name: string
    email: string
    password: string
    created_at: string
    uid: string
    isAdmin: boolean
  }
}