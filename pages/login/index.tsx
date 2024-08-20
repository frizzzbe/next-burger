import Head from "next/head";
import LoginForm from "@/modules/loginForm";
import useLocale from "@/hooks/useLocale";
import type { FC } from "react";

const Login: FC = () => {
  const i18n = useLocale();
  return (
    <>
      <Head>
        <title>{i18n.mainTitle + "|" + i18n.loginButton}</title>
      </Head>
      <h1>{i18n.loginTitle}</h1>
      <LoginForm />
    </>
  );
};

export default Login;
