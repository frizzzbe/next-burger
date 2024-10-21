import Image from "next/image"
import useSWR from "swr"
import { getCookie } from "cookies-next"
import { useLocale } from "@/hooks/useLocale"
import { axiosGet } from "@/helpers/axiosGet"
import styles from "./UserProfile.module.css"
import type { UserType } from "@/types/userTypes"

export const UserProfile = () => {
  const i18n = useLocale()
  const userId = getCookie("userId")
  const { data, error, isLoading } = useSWR(`${process.env.USERS_URL}/?id=${userId}`, axiosGet)
  const user: UserType = data?.data

  if (error) return <p>{i18n.profileStatusError}</p>
  if (isLoading) return <p className={styles.loading}>{i18n.statusLoading}</p>
  if (user)
    return (
      <div className={styles.profileWrapper}>
        <Image
          className={styles.profileImage}
          src={user.avatar}
          width={200}
          height={200}
          priority={true}
          alt={i18n.profileImageAlt}
        />
        <div>
          <p>{user.first_name}</p>
          <p>{user.last_name}</p>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </div>
      </div>
    )
}
