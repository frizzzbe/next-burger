import Link from "next/link"
import { useRouter } from "next/router"
import { useLocale } from "@/hooks/useLocale"
import { useCurrentLink } from "@/hooks/useCurrentLink"

export const Footer = () => {
  const i18n = useLocale()
  const { pathname, query, locale } = useRouter()
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
