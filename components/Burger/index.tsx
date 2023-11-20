import Image from "next/image";
import { burgerType } from "../../types";
import st from "./Burger.module.css";

const Burger = ({ burger }: { burger: burgerType }) => {
  return (
    <div className={st.singleBurger}>
      <h1>{burger.name}</h1>
      <div className={st.imageContainer}>
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
