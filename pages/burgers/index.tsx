import { BurgersTemplate } from "@/modules/BurgersTemplate"
import { getBurgers } from "@/helpers/getBurgers"
import type { BurgersTypeProps } from "@/types/burgerTypes"
import Head from "next/head"
import { useLocale } from "@/hooks/useLocale"

export const getStaticProps = async ({ locale }) => {
  try {
    const data = await getBurgers(locale)
    return {
      props: { burgers: data },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

const Burgers = ({ burgers }: BurgersTypeProps) => {
  const i18n = useLocale()
  return (
    <>
      <Head>
        <title>{i18n.mainTitle + " | " + i18n.menuBurgers}</title>
      </Head>
      <BurgersTemplate burgers={burgers} />
    </>
  )
}

export default Burgers
