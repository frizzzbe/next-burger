import styles from "./LoginForm.module.css";
import type { FC } from "react";

const LoginForm: FC = () => {
	const sendRequest = (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const login = data.get("login");
		const password = data.get("password");

		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email: login, password: password }),
		};

		fetch("https://reqres.in/api/login", options)
			.then((response) => response.json())
			.then((response) => console.log(response))
			.catch((err) => console.error(err));
	};

	return (
		<form className={styles.loginForm} onSubmit={sendRequest}>
			<label htmlFor="login">Логин</label>
			<input type="text" id="login" name="login" />
			<label htmlFor="password">Пароль</label>
			<input type="password" id="password" name="password" />
			<input className="btn" type="submit" value="Войти" />
		</form>
	);
};

export default LoginForm;
