import type { InferGetStaticPropsType, GetStaticProps } from "next"
import type { BurgersType } from "@/types/burgerTypes"
import BurgersTemplate from "@/modules/burgersTemplate"

export const getStaticProps = (async ({ locale }) => {
  const res = await fetch(`${process.env.API_URL}/api/burgers?locale=${locale}`)
  const data = await res.json()

  return {
    props: { burgers: data.items },
  }
}) satisfies GetStaticProps<{
  burgers: BurgersType
}>

const Burgers = ({ burgers }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <BurgersTemplate burgers={burgers} />
}

export default Burgers
