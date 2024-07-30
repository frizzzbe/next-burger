import React, { useEffect, useState } from "react";
import useSWR, { Fetcher } from "swr";
import Image from "next/image";
import { useRouter } from "next/router";
import useLocale from "@/hooks/useLocale";
import Link from "next/link";
import type { FC } from "react";
import type { ProfileInfo } from "../../types/userTypes";
import styles from "./UserProfile.module.css";
import { getCookie, hasCookie } from "cookies-next";

const UserProfile: FC = () => {
  const router = useRouter();
  const i18n = useLocale();
  const [userId, setUserId] = useState<string>();
  const fetcher: Fetcher<ProfileInfo, string> = (...args) =>
    fetch(...args)
      .then((res) => res.json())
      .then((json) => json.data)
      .catch((error) => {
        throw new Error(error);
      });

  useEffect(() => {
    if (typeof window) {
      if (hasCookie("userId")) {
        setUserId(getCookie("userId"));
      } else {
        router.push("/login");
      }
    }
  }, []);

  const { data, error, isLoading } = useSWR(`https://reqres.in/api/users/?id=${userId}`, fetcher);

  if (error) return <p>{i18n.profileStatusError}</p>;

  if (isLoading) return <p className={styles.loading}>{i18n.profileStatusLoading}</p>;

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
    );
};

export default UserProfile;
