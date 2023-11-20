import type { InferGetStaticPropsType, GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { burgersType } from "../../types";
import BurgerCard from "../../components/BurgerCard";

export const getStaticProps = (async () => {
  const res = await fetch(`${process.env.API_URL}/api/burgers`);
  const data = await res.json();

  return {
    props: { burgers: data.items },
  };
}) satisfies GetStaticProps<{
  burgers: burgersType;
}>;

const Burgers = ({
  burgers,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Наши бургеры</title>
      </Head>
      <div>
        <h1>Наши бургеры</h1>
        {burgers.map((burger) => (
          <BurgerCard key={burger.id} burger={burger} />
        ))}
      </div>
    </>
  );
};

export default Burgers;
