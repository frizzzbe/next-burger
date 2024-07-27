import Head from "next/head";
import type {
	InferGetStaticPropsType,
	GetStaticProps,
	GetStaticPaths,
} from "next";
import type { UserType } from "../../types/userTypes";
import User from "../../modules/usersTemplate/User";

export const getStaticPaths = (async () => {
	const res = await fetch(`https://reqres.in/api/users?per_page=12`);
	const data = await res.json();

	const paths = data.data.map((user) => {
		return {
			params: { id: String(user.id) },
		};
	});

	return {
		paths,
		fallback: false,
	};
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
	const id = context.params.id;
	const res = await fetch(`https://reqres.in/api/users/${id}`);
	const user = await res.json();

	return {
		props: { user: user.data },
	};
}) satisfies GetStaticProps<{
	user: UserType;
}>;

const singleUser = ({
	user,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Head>
				<title>
					Пользователь: {user.first_name} {user.last_name}
				</title>
			</Head>
			<User user={user} />
		</>
	);
};

export default singleUser;
