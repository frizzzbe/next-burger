import { Dropdown } from "@/components/Dropdown"
import { LogoutButton } from "@/components/LogoutButton"
import { useLocale } from "@/hooks/useLocale"
import Link from "next/link"
import style from "../Header.module.css"

export const UserDropdown = () => {
  const i18n = useLocale()
  return (
    <Dropdown>
      <Link href="/profile" className={style.loginBtn}>
        {i18n.menuProfile}
      </Link>
      <LogoutButton />
    </Dropdown>
  )
}
