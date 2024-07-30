import Head from "next/head";
import { FC } from "react";
import About from "../components/about";
import useLocale from "@/hooks/useLocale";

const AboutPage: FC = () => {
  const i18n = useLocale();
  return (
    <>
      <Head>
        <title>
          {i18n.mainTitle} | {i18n.about}
        </title>
        <meta name="description" content={i18n.pageAboutDescription} />
      </Head>
      <About />
    </>
  );
};

export default AboutPage;
