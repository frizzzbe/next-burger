import Link from "next/link"
import { usePathname } from "next/navigation"
import { SiBurgerking } from "react-icons/si"
import { useLocale } from "@/hooks/useLocale"
import styles from "./Header.module.css"

export const Header = () => {
  const pathname = usePathname()
  const i18n = useLocale()

  return (
    <header>
      <SiBurgerking className={styles.mainSvg} />
      <h1 className={styles.mainTitle}>{i18n.mainTitle}</h1>
      <nav>
        <Link href="/" className={pathname == "/" ? styles.active : ""}>
          {i18n.menuHome}
        </Link>
        <Link href="/about" className={pathname == "/about" ? styles.active : ""}>
          {i18n.menuAbout}
        </Link>
        <Link href="/reviews" className={pathname == "/reviews" ? styles.active : ""}>
          {i18n.menuReviews}
        </Link>
        <Link href="/users" className={pathname.includes("/users") ? styles.active : ""}>
          {i18n.menuUsers}
        </Link>
        <Link href="/burgers" className={pathname.includes("/burgers") ? styles.active : ""}>
          {i18n.menuBurgers}
        </Link>
        <Link href="/profile" className={styles.loginBtn}>
          {i18n.menuProfile}
        </Link>
      </nav>
    </header>
  )
}
