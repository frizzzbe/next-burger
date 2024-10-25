import Link from "next/link"
import { usePathname } from "next/navigation"
import { SiBurgerking } from "react-icons/si"
import { useLocale } from "@/hooks/useLocale"
import { UserDropdown } from "./UserDropdown"
import styles from "./Header.module.css"

export const Header = () => {
  const i18n = useLocale()
  const pathname = usePathname()
  const isActive = (url) => {
    if ((pathname === "/" && url === "/") || (pathname.startsWith(url) && url !== "/")) {
      return styles.active
    }
    return ""
  }

  return (
    <header>
      <SiBurgerking className={styles.mainSvg} />
      <h1 className={styles.mainTitle}>{i18n.mainTitle}</h1>
      <nav>
        <Link href="/" className={isActive("/")}>
          {i18n.menuHome}
        </Link>
        <Link href="/about" className={isActive("/about")}>
          {i18n.menuAbout}
        </Link>
        <Link href="/reviews" className={isActive("/reviews")}>
          {i18n.menuReviews}
        </Link>
        <Link href="/users" className={isActive("/users")}>
          {i18n.menuUsers}
        </Link>
        <Link href="/burgers" className={isActive("/burgers")}>
          {i18n.menuBurgers}
        </Link>
        <UserDropdown />
      </nav>
    </header>
  )
}
