import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Home: FC = () => {
  return (
    <>
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
      <Link href="/burgers" className="btn center">
        Все бургеры
      </Link>
    </>
  );
};

export default Home;
