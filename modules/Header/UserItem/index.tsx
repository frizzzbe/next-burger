import { UserDropdown } from "../UserDropdown"
import { getCookie } from "cookies-next"
import Link from "next/link"
import { useLocale } from "@/hooks/useLocale"
import { useEffect, useState } from "react"

export const UserItem = () => {
  const i18n = useLocale()
  const userId = getCookie("userId")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setIsLoggedIn(!!userId)
  }, [userId])

  if (isLoggedIn) return <UserDropdown />

  return (
    <Link href="/login" className="btn">
      {i18n.loginButton}
    </Link>
  )
}
