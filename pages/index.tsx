import Home from "../components/home";
import Head from "next/head";
import { FC } from "react";

const Main: FC = () => {
  return (
    <>
      <Head>
        <title>Супер бургеры | Главная</title>
        <meta
          name="description"
          content="Супер бургеры по лучшим рецептам амазонии"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
};

export default Main;
