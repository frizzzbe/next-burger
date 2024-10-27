import { SiBurgerking } from "react-icons/si"
import { useRouter } from "next/router"
import { useLocale } from "@/hooks/useLocale"
import Link from "next/link"
import useSWR from "swr"
import { axiosGet } from "@/helpers/axiosGet"
import { UserItem } from "./UserItem"
import styles from "./Header.module.css"

export const Header = () => {
  const i18n = useLocale()
  const { locale, pathname } = useRouter()
  const { data, error } = useSWR("https://3290828d2c360809.mokky.dev/menu-items", axiosGet)
  const [links] = data || []
  const localizedLinks = links ? links[locale] : []

  const isActive = (url) =>
    (pathname === "/" && url === "/") || (pathname.startsWith(url) && url !== "/")
      ? styles.active
      : ""

  if (error) return <p>{i18n.statusError}</p>
  return (
    <header>
      <SiBurgerking className={styles.mainSvg} />
      <h1 className={styles.mainTitle}>{i18n.mainTitle}</h1>
      <nav>
        {localizedLinks.map((el) => (
          <Link key={el.id} href={el.link} className={isActive(el.link)}>
            {el.title}
          </Link>
        ))}
        <UserItem />
      </nav>
    </header>
  )
}
