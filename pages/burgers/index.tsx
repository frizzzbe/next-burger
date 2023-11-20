import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { burgersType } from "../../types";
import BurgersTemplate from "../../modules/burgersTemplate";

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
  return <BurgersTemplate burgers={burgers} />;
};

export default Burgers;
