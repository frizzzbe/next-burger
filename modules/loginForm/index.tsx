import React, { useEffect, useState, type FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import styles from "./LoginForm.module.css";
import { LoginInputs, LoginStatus } from "@/types/userTypes";

const LoginForm: FC = () => {
	const router = useRouter();
	const { register, handleSubmit } = useForm<LoginInputs>();
	const [loginStatus, setLoginStatus] = useState<LoginStatus>({});

	useEffect(() => {
		// console.log(loginStatus);
		// перебрасывать на страницу профиль при успехе + записывать данные в локалстор
		if (loginStatus.id) {
			localStorage.setItem("userId", loginStatus.id);
			router.push("/profile");
		}
	}, [loginStatus]);

	const sendRequest: SubmitHandler<LoginInputs> = (data) => {
		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		};

		// согласно api регистрация пройдет только у заранее определенных пользователей из списка
		fetch("https://reqres.in/api/register", options)
			.then((response) => response.json())
			.then((res) => {
				setLoginStatus(res);
			});
	};

	return (
		<form className={styles.loginForm} onSubmit={handleSubmit(sendRequest)}>
			{loginStatus.error && (
				<span className={styles.formError}>{loginStatus.error}</span>
			)}
			<label htmlFor="email">Логин</label>
			<input type="text" id="email" {...register("email")} />
			<label htmlFor="password">Пароль</label>
			<input type="password" id="password" {...register("password")} />
			<input className="btn" type="submit" value="Войти" />
		</form>
	);
};

export default LoginForm;
