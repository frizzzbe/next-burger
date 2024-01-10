import Link from "next/link";
import { SiBurgerking } from "react-icons/si";
import { useRouter } from "next/router";
import { FC } from "react";

const Header: FC = () => {
  const router = useRouter();

  return (
    <header>
      <SiBurgerking className="mainSvg" />
      <h1 className="mainTitle">Наши бургеры</h1>
      <nav>
        <Link href="/" className={router.pathname == "/" ? "active" : ""}>
          Домой
        </Link>
        <Link
          href="/about"
          className={router.pathname == "/about" ? "active" : ""}
        >
          О нас
        </Link>
        <Link
          href="/reviews"
          className={router.pathname == "/reviews" ? "active" : ""}
        >
          Отзывы
        </Link>
        <Link
          href="/users"
          className={router.pathname == "/users" ? "active" : ""}
        >
          Юзеры
        </Link>
        <Link
          href="/burgers"
          className={router.pathname.includes("/burgers") ? "active" : ""}
        >
          Бургеры
        </Link>
      </nav>
    </header>
  );
};

export default Header;
