import { UserType } from "@/types/userTypes"

export type FilterOption = {
  value: string
  label: string
}

export type UserProps = {
  users: UserType[]
}
