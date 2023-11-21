import Head from "next/head";
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import { burgerType } from "../../types/burgerTypes";
import Burger from "../../modules/burgersTemplate/Burger";

export const getStaticPaths = (async () => {
  const res = await fetch(`${process.env.API_URL}/api/burgers`);
  const data = await res.json();

  const paths = data.items.map((burger) => {
    return {
      params: { id: burger.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const id = context.params.id;
  const res = await fetch(`${process.env.API_URL}/api/burgers/${id}`);
  const burger = await res.json();

  return {
    props: { burger },
  };
}) satisfies GetStaticProps<{
  burger: burgerType;
}>;

const singleBurger = ({
  burger,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
