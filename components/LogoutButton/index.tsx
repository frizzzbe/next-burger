import { useRouter } from "next/router"
import { useLocale } from "@/hooks/useLocale"
import { deleteCookie } from "cookies-next"
import styles from "./LogoutButton.module.css"

export const LogoutButton = () => {
  const router = useRouter()
  const i18n = useLocale()

  const logoutUser = () => {
    deleteCookie("userId")
    router.push("/login")
  }

  return (
    <button className={styles.logoutBtn} onClick={logoutUser}>
      {i18n.menuLogout}
    </button>
  )
}
