import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Home.module.css";

const Home: FC = () => {
	return (
		<>
			<h1 className={styles.mainPage}>Главная</h1>
			<div className={styles.mainImage}>
				<Image src="/fatburger.png" width={300} height={200} alt="Наш бургер" />
			</div>
			<p className={styles.text}>
				Что такое идеальный бургер? Лист свежего салата, мягкие булочки, сочное
				мясо. О других составляющих начинки можно поспорить, ведь это дело
				вкуса.
			</p>
			<p className={styles.text}>
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
