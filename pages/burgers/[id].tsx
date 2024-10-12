import Head from "next/head"
import { Burger } from "@/modules/BurgersTemplate/Burger"
import { getBurgers } from "@/helpers/getBurgers"
import type { BurgerType, BurgerTypeProps } from "@/types/burgerTypes"

export const getStaticPaths = async () => {
  try {
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
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    }
  }
}

export const getStaticProps = async (context) => {
  try {
    const { params, locale } = context
    const burger: BurgerType = await getBurgers(locale, params.id).then((res) => res[0])

    return {
      props: {
        burger,
      },
    }
  } catch (error) {
    console.error("Error fetching data:", error.message)
    return {
      props: {
        notFound: true,
      },
    }
  }
}

const SingleBurger = ({ burger }: BurgerTypeProps) => {
  return (
    <>
      <Head>
        <title>{burger.name}</title>
      </Head>
      <Burger burger={burger} />
    </>
  )
}

export default SingleBurger
