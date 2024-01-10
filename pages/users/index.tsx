import { FC } from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import type { UsersType } from "../../types/userTypes";
import UsersTemplate from "../../modules/usersTemplate";
// import { ReviewsTemplate } from "../modules/reviewsTemplate";

type ServerSideType = {
  props: UsersType;
};

export const getServerSideProps = (async () => {
  const response = await fetch("https://reqres.in/api/users");
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
  return <UsersTemplate users={users} />;
};

export default Users;
