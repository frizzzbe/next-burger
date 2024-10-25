import Head from "next/head"
import { UserProfile } from "@/modules/UserProfile"
import { useLocale } from "@/hooks/useLocale"

const Login = () => {
  const i18n = useLocale()
  return (
    <>
      <Head>
        <title>{i18n.mainTitle + " | " + i18n.profileTitle}</title>
      </Head>
      <h2>{i18n.profileHeading}: </h2>
      <div className="columnWrapper">
        <UserProfile />
      </div>
    </>
  )
}

export default Login
