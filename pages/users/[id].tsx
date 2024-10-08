import Head from "next/head"
import { User } from "@/modules/usersTemplate/User"
import { ProfileAPI } from "@/pages/api/externalAPI"
import type { UserTypeProps } from "@/types/userTypes"

export const getStaticPaths = async () => {
  const data = await ProfileAPI.getAll()

  const paths = data.map((user) => {
    return {
      params: { id: String(user.id) },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await ProfileAPI.get(id)

  return {
    props: { user: data },
  }
}

const singleUser = ({ user }: UserTypeProps) => {
  return (
    <>
      <Head>
        <title>
          Пользователь: {user.first_name} {user.last_name}
        </title>
      </Head>
      <User user={user} />
    </>
  )
}

export default singleUser
