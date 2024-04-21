import { FC, useEffect, useState } from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import type { UsersType } from "../../types/userTypes";
import UsersTemplate from "../../modules/usersTemplate";

const sortByValue = (data, value) => {
	return data.sort((a, b) => {
		let val1 = typeof a[value] === "string" ? a[value].toUpperCase() : a[value];
		let val2 = typeof b[value] === "string" ? b[value].toUpperCase() : b[value];
		return val1 < val2 ? -1 : val1 > val2 ? 1 : 0;
	});
};

type ServerSideType = {
	props: UsersType;
};

export const getServerSideProps = (async () => {
	const response = await fetch("https://reqres.in/api/users?per_page=12");
	const data = await response.json();

	return {
		props: {
			users: data.data,
		},
	};
}) satisfies GetServerSideProps<{
	users: ServerSideType;
}>;

const Users: FC<UsersType> = ({
	users,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const [selectValue, setSelectValue] = useState<string>();
	const [usersList, setUsersList] = useState(users);

	useEffect(() => {
		const sortedArr = sortByValue(usersList, selectValue);
		setUsersList([...sortedArr]);

		if (window && selectValue) {
			window.localStorage.setItem("filter", selectValue);
		}
	}, [selectValue]);

	useEffect(() => {
		if (window) {
			if (window.localStorage.getItem("filter")) {
				setSelectValue(window.localStorage.getItem("filter"));
			} else {
				setSelectValue("id");
			}
		}
	}, []);

	return (
		selectValue && (
			<UsersTemplate
				users={usersList}
				selectValue={selectValue}
				setSelectValue={setSelectValue}
			/>
		)
	);
};

export default Users;
