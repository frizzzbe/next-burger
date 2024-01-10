import React, { FC } from "react";
import Image from "next/image";
import type { UserType } from "../../../types/userTypes";
import style from "./User.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  user: UserType;
};

const User: FC<Props> = ({ user }) => {
  const router = useRouter();

  return (
    <>
      <div className={style.userCard}>
        <div className={style.infoId}>#{user.id}</div>
        <div className={style.imageContainer}>
          <Image
            src={`${user.avatar}`}
            alt={`${user.first_name}`}
            width={70}
            height={70}
          />
        </div>
        <div className={style.infoBlock}>
          <h3>{user.email}</h3>
          <p>
            {user.first_name} {user.last_name}
          </p>
        </div>
      </div>
      <p className={style.description}>
        Тут мог бы находиться подробный текст пользователя из раздела &quot;о
        себе&quot; <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus,
        enim magnam quas dolore qui fugiat repudiandae molestiae natus maxime
        dolorem quasi doloribus ea alias aliquam possimus tenetur? Distinctio,
        repellat! Quam, autem tenetur? Numquam, veritatis vero? Recusandae
        veritatis, in modi quaerat repellat provident ex repudiandae! Sapiente a
        numquam similique eligendi ad fugiat aspernatur necessitatibus
        temporibus excepturi, odit quaerat eum blanditiis? Magni aperiam illo
        fuga, non nobis quos consectetur inventore sit sed nisi velit
        consequuntur molestiae dicta repellat blanditiis explicabo, cumque
        nostrum quam ab esse tempora dolore eaque. Libero, debitis suscipit?
      </p>
      <Link href="/users" className="btn">
        Все пользователи
      </Link>
    </>
  );
};

export default User;
