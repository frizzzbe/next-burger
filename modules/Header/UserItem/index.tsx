import { UserDropdown } from "../UserDropdown"
import Link from "next/link"
import { useLocale } from "@/hooks/useLocale"
import { useAuth } from "@/context/AuthContext"

export const UserItem = () => {
  const i18n = useLocale()
  const { isAuth } = useAuth()

  if (isAuth) return <UserDropdown />
  return (
    <Link href="/login" className="btn">
      {i18n.loginButton}
    </Link>
  )
}
