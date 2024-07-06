import Link from "next/link";
import { SiBurgerking } from "react-icons/si";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import styles from "./Header.module.css";

const Header: FC = () => {
	const router = useRouter();
	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		if (typeof window) {
			if (localStorage.getItem("userId")) {
				setIsAuth(true);
			} else {
				setIsAuth(false);
			}
		}
	}, []);

	return (
		<header>
			<SiBurgerking className={styles.mainSvg} />
			<h1 className={styles.mainTitle}>Наши бургеры</h1>
			<nav>
				<Link href="/" className={router.pathname == "/" && styles.active}>
					Домой
				</Link>
				<Link
					href="/about"
					className={router.pathname == "/about" && styles.active}
				>
					О нас
				</Link>
				<Link
					href="/reviews"
					className={router.pathname == "/reviews" && styles.active}
				>
					Отзывы
				</Link>
				<Link
					href="/users"
					className={router.pathname.includes("/users") && styles.active}
				>
					Юзеры
				</Link>
				<Link
					href="/burgers"
					className={router.pathname.includes("/burgers") && styles.active}
				>
					Бургеры
				</Link>
				{isAuth ? (
					router.pathname.includes("/profile") ? (
						<Link href="/logut" className={styles.loginBtn}>
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
			</nav>
		</header>
	);
};

export default Header;
