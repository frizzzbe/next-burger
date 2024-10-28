import Head from "next/head"
import { User } from "@/modules/UsersTemplate/User"
import { axiosGet } from "@/helpers/axiosGet"
import type { UserTypeProps, UserType } from "@/types/userTypes"
import { useLocale } from "@/hooks/useLocale"

export const getStaticPaths = async () => {
  try {
    const { data } = await axiosGet(`${process.env.USERS_URL}?per_page=12`)
    const paths = data.flatMap((user) => {
      return [
        { params: { id: String(user.id) }, locale: "en" },
        { params: { id: String(user.id) }, locale: "ru" },
      ]
    })
    return {
      paths,
      fallback: false,
    }
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    }
  }
}

export const getStaticProps = async (context) => {
  try {
    const id = context.params.id
    const { data }: { data: UserType } = await axiosGet(`${process.env.USERS_URL}/?id=${id}`)

    return {
      props: { user: data },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

const SingleUser = ({ user }: UserTypeProps) => {
  const i18n = useLocale()
  return (
    <>
      <Head>
        <title>{`${i18n.userTitle}: ${user.first_name} ${user.last_name}`}</title>
      </Head>
      <User user={user} />
    </>
  )
}

export default SingleUser
