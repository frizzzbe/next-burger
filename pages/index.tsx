import Head from "next/head";
import Image from "next/image";
// import styles from '@/styles/Home.module.css'
import Link from "next/link";
import { FC } from "react";

const Home: FC = () => {
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
      <h1 className="mainPage">Главная</h1>
      <div className="mainImage">
        <Image src="/fatburger.png" width={300} height={200} alt="Наш бургер" />
      </div>
      <p className="text">
        Что такое идеальный бургер? Лист свежего салата, мягкие булочки, сочное
        мясо. О других составляющих начинки можно поспорить, ведь это дело
        вкуса.
      </p>
      <p className="text">
        Есть ещё пара-тройка факторов, влияющих на аппетит: цены, качество
        обслуживания, правильная атмосфера заведения.
      </p>
      <Link href="/burgers" className="btn">
        Все бургеры
      </Link>
    </>
  );
};

export default Home;
