import UserProfile from "../../modules/userProfile";
import type { FC } from "react";

const Login: FC = () => {
	return (
		<>
			<h1>Ваш профиль: </h1>
			<UserProfile />
		</>
	);
};

export default Login;
