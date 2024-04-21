import Home from "../components/Home";
import Head from "next/head";
import { FC } from "react";

const Main: FC = () => {
	return (
		<>
			<Head>
				<title>Супер бургеры | Главная</title>
			</Head>
			<Home />
		</>
	);
};

export default Main;
