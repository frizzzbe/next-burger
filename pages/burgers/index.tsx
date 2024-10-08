import { BurgersTemplate } from "@/modules/burgersTemplate"
import type { BurgersType } from "@/types/burgerTypes"

export const getStaticProps = async ({ locale }) => {
  const res = await fetch(`${process.env.API_URL}/api/burgers?locale=${locale}`)
  const data = await res.json()

  return {
    props: { burgers: data.items },
  }
}

const Burgers = ({ burgers }: BurgersType) => {
  return <BurgersTemplate burgers={burgers} />
}

export default Burgers
