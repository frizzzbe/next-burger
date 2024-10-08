import Head from "next/head"
import { Burger } from "@/modules/burgersTemplate/Burger"
import type { BurgerType, BurgerTypeProps } from "@/types/burgerTypes"

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.API_URL}/api/burgers`)
  const data = await res.json()
  const paths = data.items.flatMap((burger) => {
    return [
      { params: { id: burger.id }, locale: "ru" },
      { params: { id: burger.id }, locale: "en" },
    ]
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const { id, locale } = context.params
  const res = await fetch(`${process.env.API_URL}/api/burgers/${id}?locale=${locale}`)
  const burger: BurgerType = await res.json()

  return {
    props: { burger },
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
