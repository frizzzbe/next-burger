import Link from "next/link"
import Image from "next/image"
import { getCookie } from "cookies-next"
import { useLocale } from "@/hooks/useLocale"
import { ProfileAPI } from "@/pages/api/externalAPI"
import styles from "./UserProfile.module.css"

export const UserProfile = () => {
  const i18n = useLocale()
  const userId = getCookie("userId")
  const { data, error, isLoading } = ProfileAPI.getSWR(userId)

  if (error) return <p>{i18n.profileStatusError}</p>

  if (isLoading) return <p className={styles.loading}>{i18n.profileStatusLoading}</p>

  if (data)
    return (
      <>
        <Image
          className={styles.profileImage}
          src={data.avatar}
          width={200}
          height={200}
          priority={true}
          alt={i18n.profileImageAlt}
        />
        <div>
          <p>{data.first_name}</p>
          <p>{data.last_name}</p>
          <Link href={`mailto:${data.email}`}>{data.email}</Link>
        </div>
      </>
    )
}
