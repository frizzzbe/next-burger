import Head from "next/head";
import LoginForm from "../../modules/loginForm";
import type { FC } from "react";

const Login: FC = () => {
	return (
		<>
			<Head>
				<title>Супер бургеры | Вход</title>
			</Head>
			<h1>Форма для входа</h1>
			<LoginForm />
		</>
	);
};

export default Login;
