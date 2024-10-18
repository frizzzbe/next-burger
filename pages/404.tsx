import Link from "next/link"
import { useLocale } from "@/hooks/useLocale"
import Head from "next/head"

const NotFoundPage = () => {
  const i18n = useLocale()
  return (
    <>
      <Head>
        <title>{i18n.notFoundTitle}</title>
      </Head>
      <div className="not-found">
        <h2>{i18n.notFoundTitle}</h2>
        <p>{i18n.notFoundMessage}</p>
        <p>
          {i18n.notFoundAction} <Link href="/">{i18n.notFoundLinkMain}</Link>
        </p>
      </div>
    </>
  )
}

export default NotFoundPage
