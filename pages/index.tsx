import Head from "next/head"
import { Home } from "@/components/Home"
import { useLocale } from "@/hooks/useLocale"

const Main = () => {
  const i18n = useLocale()
  return (
    <>
      <Head>
        <title>{i18n.mainTitle + "|" + i18n.main}</title>
      </Head>
      <Home />
    </>
  )
}

export default Main
