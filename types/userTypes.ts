export type UserType = {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

export type UserTypeProps = { user: UserType }

export type UsersTypeProps = {
  users: UserType[]
}

export type LoginInputs = {
  email: string
  password: string
}

export type LoginStatus = {
  id?: string
  token?: string
  error?: string
}
