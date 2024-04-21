import styles from "./LoginForm.module.css";
import type { FC } from "react";

const LoginForm: FC = () => {
	const sendRequest = (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const username = data.get("username");
		const password = data.get("password");
		console.log(`You searched for username: ${username} password: ${password}`);
	};

	return (
		<form className={styles.loginForm} onSubmit={sendRequest}>
			<label htmlFor="username">Username</label>
			<input type="text" id="username" name="username" />
			<label htmlFor="password">Password</label>
			<input type="password" id="password" name="password" />
			<input className="btn" type="submit" value="Login" />
		</form>
	);
};

export default LoginForm;
