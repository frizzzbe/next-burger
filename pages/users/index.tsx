import { FC, useEffect, useState } from "react"
import Head from "next/head"
import type { InferGetServerSidePropsType, GetServerSideProps } from "next"
import { getCookie, hasCookie, setCookie } from "cookies-next"
import useLocale from "@/hooks/useLocale"
import UsersTemplate from "@/modules/usersTemplate"
import type { UsersType } from "@/types/userTypes"
import { ProfileAPI } from "../api/ProfileAPI"

const sortByValue = (data, value) => {
  return data.sort((a, b) => {
    const val1 = typeof a[value] === "string" ? a[value].toUpperCase() : a[value]
    const val2 = typeof b[value] === "string" ? b[value].toUpperCase() : b[value]
    return val1 < val2 ? -1 : val1 > val2 ? 1 : 0
  })
}

export const getServerSideProps = (async () => {
  const data = await ProfileAPI.getAll()

  return {
    props: {
      users: data,
    },
  }
}) satisfies GetServerSideProps<{
  users: { props: UsersType }
}>

const Users: FC<UsersType> = ({
  users,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const i18n = useLocale()
  const [selectValue, setSelectValue] = useState<string>()
  const [usersList, setUsersList] = useState(users)

  useEffect(() => {
    const sortedArr = sortByValue(usersList, selectValue)
    setUsersList([...sortedArr])
    if (selectValue) {
      setCookie("filter", selectValue)
    }
  }, [selectValue])

  useEffect(() => {
    if (typeof window !== undefined) {
      if (hasCookie("filter")) {
        setSelectValue(getCookie("filter"))
      } else {
        setSelectValue("id")
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>{i18n.usersTitle}</title>
      </Head>
      {selectValue && (
        <UsersTemplate
          users={usersList}
          selectValue={selectValue}
          setSelectValue={setSelectValue}
        />
      )}
    </>
  )
}

export default Users
