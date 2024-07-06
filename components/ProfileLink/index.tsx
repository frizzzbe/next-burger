import React, { type FC } from "react";
import router from "next/router";
import Link from "next/link";
import styles from "./ProfileLink.module.css";

const ProfileLink: FC = () => {
	const logoutUser = (e) => {
		e.preventDefault();
		localStorage.removeItem("userId");
		router.push("/login");
	};

	return (
		<>
			{localStorage.getItem("userId") ? (
				router.pathname.includes("/profile") ? (
					<Link href="/logout" className={styles.loginBtn} onClick={logoutUser}>
						Выйти
					</Link>
				) : (
					<Link href="/profile" className={styles.loginBtn}>
						Профиль
					</Link>
				)
			) : (
				<Link href="/login" className={styles.loginBtn}>
					Войти
				</Link>
			)}
		</>
	);
};

export default ProfileLink;
