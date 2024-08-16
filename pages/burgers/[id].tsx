import Head from "next/head";
import type { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";
import type { BurgerType } from "@/types/burgerTypes";
import Burger from "@/modules/burgersTemplate/Burger";

export const getStaticPaths = (async () => {
  const res = await fetch(`${process.env.API_URL}/api/burgers`);
  const data = await res.json();

  const paths = data.items.flatMap((burger) => {
    return [
      { params: { id: burger.id }, locale: "ru" },
      { params: { id: burger.id }, locale: "en" },
    ];
  });

  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const { id, locale } = context.params;
  const res = await fetch(`${process.env.API_URL}/api/burgers/${id}?locale=${locale}`);
  const burger = await res.json();

  return {
    props: { burger },
  };
}) satisfies GetStaticProps<{
  burger: BurgerType;
}>;

const singleBurger = ({ burger }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{burger.name}</title>
      </Head>
      <Burger burger={burger} />
    </>
  );
};

export default singleBurger;
