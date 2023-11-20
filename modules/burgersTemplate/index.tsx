import { FC } from "react";
import Head from "next/head";
import { burgersType } from "../../types";
import BurgerCard from "../../components/BurgerCard";

const BurgersTemplate: FC<burgersType> = ({ burgers }: burgersType) => {
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

export default BurgersTemplate;
