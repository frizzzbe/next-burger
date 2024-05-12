"use client";
import LoginForm from "../../modules/loginForm";
import type { FC } from "react";

const Login: FC = () => {
	return (
		<>
			<h1>Форма для входа</h1>
			<LoginForm />
		</>
	);
};

export default Login;
