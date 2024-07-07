import Head from "next/head";
import { FC } from "react";
import About from "../components/about";

const AboutPage: FC = () => {
	return (
		<>
			<Head>
				<title>Супер бургеры | О нас</title>
				<meta
					name="description"
					content="Супер бургеры по лучшим рецептам амазонии"
				/>
			</Head>
			<About />
		</>
	);
};

export default AboutPage;
