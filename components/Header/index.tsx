import Link from "next/link";
import { SiBurgerking } from "react-icons/si";
import { usePathname } from "next/navigation";
import type { FC } from "react";
import styles from "./Header.module.css";
import ProfileLink from "../ProfileLink";

const Header: FC = () => {
	const pathname = usePathname();

	return (
		<header>
			<SiBurgerking className={styles.mainSvg} />
			<h1 className={styles.mainTitle}>Наши бургеры</h1>
			<nav>
				<Link href="/" className={pathname == "/" ? styles.active : ""}>
					Домой
				</Link>
				<Link
					href="/about"
					className={pathname == "/about" ? styles.active : ""}
				>
					О нас
				</Link>
				<Link
					href="/reviews"
					className={pathname == "/reviews" ? styles.active : ""}
				>
					Отзывы
				</Link>
				<Link
					href="/users"
					className={pathname.includes("/users") ? styles.active : ""}
				>
					Юзеры
				</Link>
				<Link
					href="/burgers"
					className={pathname.includes("/burgers") ? styles.active : ""}
				>
					Бургеры
				</Link>
				<ProfileLink />
			</nav>
		</header>
	);
};

export default Header;
