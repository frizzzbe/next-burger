import UserProfile from "../../modules/userProfile";
import type { FC } from "react";
import Head from "next/head";

const Login: FC = () => {
	return (
		<>
			<Head>
				<title>Супер бургеры | Профиль</title>
			</Head>
			<h1>Ваш профиль: </h1>
			<div className="profileWrapper">
				<UserProfile />
			</div>
		</>
	);
};

export default Login;
