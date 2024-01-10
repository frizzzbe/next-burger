import { FC, useEffect, useState } from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import type { UsersType } from "../../types/userTypes";
import UsersTemplate from "../../modules/usersTemplate";

const sortByValue = (data, value) => {
  data.sort((a, b) => {
    let val1 = a[value].toUpperCase();
    let val2 = b[value].toUpperCase();

    if (val1 < val2) {
      return -1;
    }
    if (val1 > val2) {
      return 1;
    }
    return 0;
  });

  return data;
};

type ServerSideType = {
  props: UsersType;
};

export const getServerSideProps = (async () => {
  const response = await fetch("https://reqres.in/api/users");
  const data = await response.json();

  return {
    props: {
      users: data.data,
      // users: sortByValue(data.data, "last_name"),
    },
  };
}) satisfies GetServerSideProps<{
  users: ServerSideType;
}>;

const Users: FC<UsersType> = ({
  users,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [selectValue, setSelectValue] = useState("last_name");

  useEffect(() => {
    users = sortByValue(users, selectValue);
    // console.log(sortByValue(users, selectValue));
  }, [selectValue]);

  return <UsersTemplate users={users} setSelectValue={setSelectValue} />;
};

export default Users;
