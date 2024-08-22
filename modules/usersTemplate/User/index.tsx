import Image from "next/image"
import type { UserType } from "@/types/userTypes"
import useLocale from "@/hooks/useLocale"
import style from "./User.module.css"
import Link from "next/link"

const User = ({ user }: { user: UserType }) => {
  const i18n = useLocale()

  return (
    <>
      <div className={style.userCard}>
        <div className={style.infoId}>#{user.id}</div>
        <div className={style.imageContainer}>
          <Image src={`${user.avatar}`} alt={`${user.first_name}`} width={70} height={70} />
        </div>
        <div className={style.infoBlock}>
          <h3>{user.email}</h3>
          <p>
            {user.first_name} {user.last_name}
          </p>
        </div>
      </div>
      <p className={style.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus, enim magnam quas dolore
        qui fugiat repudiandae molestiae natus maxime dolorem quasi doloribus ea alias aliquam
        possimus tenetur? Distinctio, repellat! Quam, autem tenetur? Numquam, veritatis vero?
        Recusandae veritatis, in modi quaerat repellat provident ex repudiandae! Sapiente a numquam
        similique eligendi ad fugiat aspernatur necessitatibus temporibus excepturi, odit quaerat
        eum blanditiis? Magni aperiam illo fuga, non nobis quos consectetur inventore sit sed nisi
        velit consequuntur molestiae dicta repellat blanditiis explicabo, cumque nostrum quam ab
        esse tempora dolore eaque. Libero, debitis suscipit?
      </p>
      <Link href="/users" className="btn center">
        {i18n.usersAllUsers}
      </Link>
    </>
  )
}

export default User
