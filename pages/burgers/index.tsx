import { BurgersTemplate } from "@/modules/burgersTemplate"
import type { BurgersTypeProps } from "@/types/burgerTypes"
import { getBurgers } from "@/helpers/getBurgers"

export const getStaticProps = async ({ locale }) => {
  try {
    const data = await getBurgers(locale)

    return {
      props: { burgers: data, error: false },
    }
  } catch (error) {
    return {
      props: { burgers: null, error: true },
    }
  }
}

const Burgers = ({ burgers, error }: BurgersTypeProps) => {
  return error ? <p>Не удалось загрузить данные.</p> : <BurgersTemplate burgers={burgers} />
}

export default Burgers
