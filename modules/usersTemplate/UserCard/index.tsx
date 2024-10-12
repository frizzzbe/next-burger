import Image from "next/image"
import Link from "next/link"
import type { UserTypeProps } from "@/types/userTypes"
import style from "./UserCard.module.css"

export const UserCard = ({ user }: UserTypeProps) => {
  return (
    <Link href={`/users/${user.id}`} key={user.id} className={style.userCard} locale={false}>
      <div className={style.imageContainer}>
        <Image src={`${user.avatar}`} alt={`${user.first_name}`} width={70} height={70} />
      </div>
      <div className={style.infoBlock}>
        <h3>{user.email}</h3>
        <p>
          {user.first_name} {user.last_name}
        </p>
      </div>
      <div className={style.infoId}>#{user.id}</div>
    </Link>
  )
}
