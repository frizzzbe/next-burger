import { FC } from "react";
import Head from "next/head";
import type { BurgersType } from "../../types/burgerTypes";
import BurgerCard from "./BurgerCard";

const BurgersTemplate: FC<BurgersType> = ({ burgers }: BurgersType) => {
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
