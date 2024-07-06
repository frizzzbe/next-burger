import React, { useEffect, useState } from "react";
import useSWR, { Fetcher } from "swr";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import type { FC } from "react";
import type { ProfileInfo } from "../../types/userTypes";
import styles from "./UserProfile.module.css";

const UserProfile: FC = () => {
	const router = useRouter();
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
			if (localStorage.getItem("userId")) {
				setUserId(localStorage.getItem("userId"));
			} else {
				router.push("/login");
			}
		}
	}, []);

	const { data, error } = useSWR(
		`https://reqres.in/api/users/?id=${userId}`,
		fetcher
	);

	if (error) return <p>Ошибка при загрузке данных пользователя</p>;

	if (!data) return <p className={styles.loading}>Loading...</p>;

	return (
		<>
			<Image
				className={styles.profileImage}
				src={data.avatar}
				width={200}
				height={200}
				priority={true}
				alt="Изображение профиля"
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

// getServerSideProps + nookies and ssr prefetching
// уменьшить рендер и вызов fetch до одного
