import Head from "next/head"
import { UserProfile } from "@/modules/UserProfile"
import { useLocale } from "@/hooks/useLocale"
import { LogoutButton } from "@/components/LogoutButton"

const Login = () => {
  const i18n = useLocale()
  return (
    <>
      <Head>
        <title>{i18n.mainTitle + " | " + i18n.profileTitle}</title>
      </Head>
      <h1>{i18n.profileHeading}: </h1>
      <div className="columnWrapper">
        <UserProfile />
        <LogoutButton />
      </div>
    </>
  )
}

export default Login
