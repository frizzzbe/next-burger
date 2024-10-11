import Head from "next/head"
import { Burger } from "@/modules/burgersTemplate/Burger"
import type { BurgerType, BurgerTypeProps } from "@/types/burgerTypes"
import { getBurgers } from "@/helpers/getBurgers"

export const getStaticPaths = async () => {
  const data = await getBurgers("")
  const paths = data.flatMap((burger) => {
    return [
      { params: { id: burger.id }, locale: "en" },
      { params: { id: burger.id }, locale: "ru" },
    ]
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const { params, locale } = context
  const burger: BurgerType = await getBurgers(locale, params.id).then((res) => res[0])

  return {
    props: {
      burger,
      locale,
    },
  }
}

const singleBurger = ({ burger }: BurgerTypeProps) => {
  return (
    <>
      <Head>
        <title>{burger.name}</title>
      </Head>
      <Burger burger={burger} />
    </>
  )
}

export default singleBurger
