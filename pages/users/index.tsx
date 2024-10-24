import { createContext, useEffect, useState } from "react"
import { getCookie, setCookie } from "cookies-next"
import Head from "next/head"
import { useLocale } from "@/hooks/useLocale"
import { UsersTemplate } from "@/modules/UsersTemplate"
import { sortByValue } from "@/helpers/sortByValue"
import { axiosGet } from "@/helpers/axiosGet"
import type { UsersTypeProps, UserType } from "@/types/userTypes"

export const getServerSideProps = async ({ req, res }) => {
  try {
    const { data }: { data: UserType[] } = await axiosGet(`${process.env.USERS_URL}?per_page=12`)
    const filter = getCookie("filter", { req, res }) || "id"
    return {
      props: {
        users: data,
        filter,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

const Users = ({ users, filter }: UsersTypeProps) => {
  const i18n = useLocale()
  const [selectValue, setSelectValue] = useState(filter)
  const [usersList, setUsersList] = useState(users)

  useEffect(() => {
    const sortedArr = sortByValue(usersList, selectValue)
    setUsersList([...sortedArr])
    setCookie("filter", selectValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectValue])

  return (
    <>
      <Head>
        <title>{i18n.mainTitle + " | " + i18n.usersTitle}</title>
      </Head>
      <SelectContext.Provider value={{ selectValue, setSelectValue }}>
        <UsersTemplate users={usersList} />
      </SelectContext.Provider>
    </>
  )
}

export const SelectContext = createContext(null)
export default Users
