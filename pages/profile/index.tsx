import UserProfile from "../../modules/userProfile";
import type { FC } from "react";
import useLocale from "@/hooks/useLocale";
import Head from "next/head";

const Login: FC = () => {
  const i18n = useLocale();
  return (
    <>
      <Head>
        <title>{i18n.mainTitle + "|" + i18n.profileTitle}</title>
      </Head>
      <h1>{i18n.profileHeading}: </h1>
      <div className="profileWrapper">
        <UserProfile />
      </div>
    </>
  );
};

export default Login;
