import React from "react"
import { UserType } from "@/types/userTypes"

export type FilterOption = {
  value: string
  label: string
}

export type CustomSelectPropsTS = {
  selectValue: string
  setSelectValue: React.Dispatch<React.SetStateAction<string>>
}

export type UserProps = {
  users: UserType[]
  selectValue: string
  setSelectValue: React.Dispatch<React.SetStateAction<string>>
}
