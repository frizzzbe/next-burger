import { FC, useEffect, useState } from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import type { UsersType } from "../../types/userTypes";
import useLocale from "@/hooks/useLocale";
import Head from "next/head";
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
  const i18n = useLocale();
  const [selectValue, setSelectValue] = useState<string>();
  const [usersList, setUsersList] = useState(users);

  useEffect(() => {
    const sortedArr = sortByValue(usersList, selectValue);
    setUsersList([...sortedArr]);
    if (selectValue) {
      setCookie("filter", selectValue);
    }
  }, [selectValue]);

  useEffect(() => {
    if (typeof window) {
      if (hasCookie("filter")) {
        setSelectValue(getCookie("filter"));
      } else {
        setSelectValue("id");
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>{i18n.usersTitle}</title>
      </Head>
      {selectValue && (
        <UsersTemplate
          users={usersList}
          selectValue={selectValue}
          setSelectValue={setSelectValue}
        />
      )}
    </>
  );
};

export default Users;
