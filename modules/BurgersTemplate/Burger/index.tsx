import Image from "next/image"
import type { BurgerTypeProps } from "@/types/burgerTypes"
import style from "./Burger.module.css"

export const Burger = ({ burger }: BurgerTypeProps) => {
  return (
    <div className={style.singleBurger}>
      <h2>{burger.name}</h2>
      <div className={style.imageContainer}>
        <Image src={burger.image} alt={burger.name} width={100} height={100} priority={true} />
      </div>
      <div>
        <p>{burger.desc}</p>
      </div>
    </div>
  )
}
