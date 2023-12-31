import Image from "next/image";
import type { BurgerType } from "../../../types/burgerTypes";
import style from "./Burger.module.css";

const Burger = ({ burger }: { burger: BurgerType }) => {
  return (
    <div className={style.singleBurger}>
      <h1>{burger.name}</h1>
      <div className={style.imageContainer}>
        <Image
          src={burger.image}
          alt={burger.name}
          width={100}
          height={100}
          priority={true}
        />
      </div>
      <div>
        <p>{burger.desc}</p>
      </div>
    </div>
  );
};

export default Burger;
