import Head from "next/head"
import { LoginForm } from "@/modules/LoginForm"
import { useLocale } from "@/hooks/useLocale"

const Login = () => {
  const i18n = useLocale()
  return (
    <>
      <Head>
        <title>{i18n.mainTitle + " | " + i18n.loginButton}</title>
      </Head>
      <h2>{i18n.loginTitle}</h2>
      <LoginForm />
    </>
  )
}

export default Login
