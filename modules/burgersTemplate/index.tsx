import Head from "next/head"
import useLocale from "@/hooks/useLocale"
import BurgerCard from "./BurgerCard"
import type { BurgersType } from "@/types/burgerTypes"

const BurgersTemplate = ({ burgers }: BurgersType) => {
  const i18n = useLocale()
  return (
    <>
      <Head>
        <title>{i18n.mainTitle}</title>
      </Head>
      <div>
        <h1>{i18n.mainTitle}</h1>
        {burgers.map((burger) => (
          <BurgerCard key={burger.id} burger={burger} />
        ))}
      </div>
    </>
  )
}

export default BurgersTemplate
