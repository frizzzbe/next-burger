import Link from 'next/link'
import { SiBurgerking } from 'react-icons/si'
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header>
      <SiBurgerking/>
      <h1 className="mainTitle">Наши бургеры</h1>
      <nav>
        <Link href="/" className={router.pathname == "/" ? "active" : ""}>Домой</Link>
        <Link href="/about" className={router.pathname == "/about" ? "active" : ""}>О нас</Link>
        <Link href="/reviews" className={router.pathname == "/reviews" ? "active" : ""}>Отзывы</Link>
        <Link href="/burgers" className={router.pathname == "/burgers" ? "active" : ""}>Бургеры</Link>
      </nav>
    </header>
  )
}

export default Header