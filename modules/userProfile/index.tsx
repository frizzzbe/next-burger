import Image from "next/image";
import styles from "./UserProfile.module.css";
import React, { useEffect, useState } from "react";
import useSWR, { Fetcher } from "swr";
import Link from "next/link";
import type { FC } from "react";
import type { ProfileInfo } from "../../types/userTypes";

const UserProfile: FC = () => {
	const [userId, setUserId] = useState<string>();
	const fetcher: Fetcher<ProfileInfo, string> = (...args) =>
		fetch(...args)
			.then((res) => res.json())
			.then((json) => json.data)
			.catch((error) => {
				throw new Error(error);
			});

	useEffect(() => {
		if (window) {
			setUserId(localStorage.getItem("userId"));
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
