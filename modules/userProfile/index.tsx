import Image from "next/image";
import styles from "./UserProfile.module.css";
import type { FC } from "react";

const UserProfile: FC = () => {
	return (
		<div className={styles.profileWrapper}>
			<Image
				className={styles.profileImage}
				src="https://reqres.in/img/faces/1-image.jpg"
				width={200}
				height={200}
				alt="Изображение профиля"
			/>
			<div>
				<p>Arkadiy</p>
				<p>Minasyan</p>
				<p>Minasyan@pop.pup</p>
			</div>
		</div>
	);
};

export default UserProfile;
