import useLocale from "@/hooks/useLocale"
import useCurrentLink from "@/hooks/useCurrentLink"
import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"

const Footer: FC = () => {
  const i18n = useLocale()
  const router = useRouter()
  const { pathname, query, locale } = router
  const href = useCurrentLink(pathname, query)

  return (
    <footer>
      <p>{i18n.copyright}</p>
      <Link href={href} locale={locale === "ru" ? "en" : "ru"}>
        {i18n.changeLanguage}
      </Link>
    </footer>
  )
}

export default Footer
