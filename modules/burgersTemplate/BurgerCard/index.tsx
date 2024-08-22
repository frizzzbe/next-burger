import Image from "next/image"
import type { BurgerType } from "@/types/burgerTypes"
import style from "./BurgerCard.module.css"
import Link from "next/link"

const BurgerCard = ({ burger }: { burger: BurgerType }) => {
  return (
    <Link href={`/burgers/${burger.id}`} key={burger.id} className={style.burgerCard}>
      <div className={style.imageContainer}>
        <Image src={`${burger.image}`} alt={`${burger.name}`} width={150} height={150} />
      </div>
      <div>
        <h3>{burger.name}</h3>
        <p>{burger.desc}</p>
      </div>
    </Link>
  )
}

export default BurgerCard
