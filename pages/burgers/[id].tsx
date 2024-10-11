import Head from "next/head"
import { Burger } from "@/modules/burgersTemplate/Burger"
import type { BurgerType, BurgerTypeProps } from "@/types/burgerTypes"
import { getBurgers } from "@/helpers/getBurgers"

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
    console.error("Error fetching paths:", error)

    // Возвращаем пустые пути, временно отключив генерацию
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
        locale,
      },
    }
  } catch (error) {
    console.error("Error fetching data:", error.message)
    return {
      props: {
        error: error.message || "Something went wrong",
      },
    }
  }
}

const singleBurger = ({ burger, error }: BurgerTypeProps) => {
  if (error) {
    return <div>{error}</div>
  }

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
