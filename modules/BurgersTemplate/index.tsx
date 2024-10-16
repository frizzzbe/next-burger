import Head from "next/head"
import { useLocale } from "@/hooks/useLocale"
import { BurgerCard } from "./BurgerCard"
import type { BurgersType } from "@/types/burgerTypes"

export const BurgersTemplate = ({ burgers }: BurgersType) => {
  const i18n = useLocale()
  return (
    <>
      <Head>
        <title>{i18n.mainTitle}</title>
      </Head>
      <div>
        <h2>{i18n.burgersMenu}</h2>
        {burgers.map((burger) => (
          <BurgerCard key={burger.id} burger={burger} />
        ))}
      </div>
    </>
  )
}
