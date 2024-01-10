import { FC } from "react";
import Head from "next/head";
import type { UsersType } from "../../types/userTypes";
import UserCard from "./UserCard";

const UsersTemplate: FC<UsersType> = ({ users }: UsersType) => {
  return (
    <>
      <Head>
        <title>Список пользователей</title>
      </Head>
      <div>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default UsersTemplate;
