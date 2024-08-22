import type { FC } from "react"
import Link from "next/link"
import Image from "next/image"
import { getCookie } from "cookies-next"
import useSWR, { Fetcher } from "swr"
import useLocale from "@/hooks/useLocale"
import type { ProfileInfo } from "@/types/userTypes"
import styles from "./UserProfile.module.css"

const UserProfile: FC = () => {
  const i18n = useLocale()
  const userId = getCookie("userId")
  const fetcher: Fetcher<ProfileInfo, string> = (...args) =>
    fetch(...args)
      .then((res) => res.json())
      .then((json) => json.data)
      .catch((error) => {
        throw new Error(error)
      })

  const { data, error, isLoading } = useSWR(`https://reqres.in/api/users/?id=${userId}`, fetcher)

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

export default UserProfile
