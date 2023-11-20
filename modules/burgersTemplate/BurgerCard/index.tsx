import Image from "next/image";
import { burgerType } from "../../../types";
import st from "./Burger.module.css";
import Link from "next/link";

const BurgerCard = ({ burger }: { burger: burgerType }) => {
  return (
    <Link
      href={`/burgers/${burger.id}`}
      key={burger.id}
      className={st.burgerCard}
    >
      <div className={st.imageContainer}>
        <Image
          src={`${burger.image}`}
          alt={`${burger.name}`}
          width={150}
          height={150}
        />
      </div>
      <div>
        <h3>{burger.name}</h3>
        <p>{burger.desc}</p>
      </div>
    </Link>
  );
};

export default BurgerCard;
