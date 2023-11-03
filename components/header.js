import Link from 'next/link'
import { SiBurgerking } from 'react-icons/si'

const Header = () => {
  return (
    <header>
        <div>
            <SiBurgerking/>
            <h1>Наши бургеры</h1>
        </div>
        <nav>
            <Link href="/">Домой</Link>
            <Link href="/about">О нас</Link>
            <Link href="/about">Отзывы</Link>
            <Link href="/burgers">Бургеры</Link>
        </nav>
    </header>
  )
}

export default Header