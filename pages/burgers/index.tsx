import { BurgersTemplate } from "@/modules/burgersTemplate"
import { getBurgers } from "@/helpers/getBurgers"
import type { BurgersTypeProps } from "@/types/burgerTypes"

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
  return <BurgersTemplate burgers={burgers} />
}

export default Burgers
