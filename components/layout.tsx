import { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./footer";
import Head from "next/head";

type LayoutProps = {
	children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Супер бургеры</title>
				<meta
					name="description"
					content="Супер бургеры по лучшим рецептам от шефа"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="content">
				<Header />
				<main className="mainWrapper">{children}</main>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
