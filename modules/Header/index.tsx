import { useEffect, useState } from "react"
import { SiBurgerking } from "react-icons/si"
import { useRouter } from "next/router"
import { useLocale } from "@/hooks/useLocale"
import Link from "next/link"
import axios from "axios"
import { UserItem } from "./UserItem"
import styles from "./Header.module.css"

export const Header = () => {
  const i18n = useLocale()
  const { locale, pathname } = useRouter()
  const [menuLinks, setMenuLinks] = useState([])
  const isActive = (url) =>
    (pathname === "/" && url === "/") || (pathname.startsWith(url) && url !== "/")
      ? styles.active
      : ""

  useEffect(() => {
    axios
      .get("https://3290828d2c360809.mokky.dev/menu-items")
      .then((res) => setMenuLinks(res.data[0][locale]))
      .catch((error) => {
        console.error("error:", error)
      })
  }, [locale])

  return (
    <header>
      <SiBurgerking className={styles.mainSvg} />
      <h1 className={styles.mainTitle}>{i18n.mainTitle}</h1>
      <nav>
        {menuLinks.map((el) => (
          <Link key={el.id} href={el.link} className={isActive(el.link)}>
            {el.title}
          </Link>
        ))}
        <UserItem />
      </nav>
    </header>
  )
}
