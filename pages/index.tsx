import Home from "@/components/Home";
import Head from "next/head";
import { FC } from "react";
import useLocale from "@/hooks/useLocale";

const Main: FC = () => {
  const i18n = useLocale();
  return (
    <>
      <Head>
        <title>{i18n.mainTitle + "|" + i18n.main}</title>
      </Head>
      <Home />
    </>
  );
};

export default Main;
