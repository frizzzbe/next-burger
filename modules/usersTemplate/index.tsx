import { FC, useEffect } from "react";
import Head from "next/head";
import type { UserType } from "../../types/userTypes";
import UserCard from "./UserCard";
import React, { MouseEventHandler, useState } from "react";
import Select, {
  components,
  ControlProps,
  MultiValue,
  Props,
  StylesConfig,
} from "react-select";

interface FilterOption {
  value: string;
  label: string;
}

const filterOptions: FilterOption[] = [
  { value: "first_name", label: "Сортировать по имени" },
  { value: "last_name", label: "Сортировать по фамилии" },
  { value: "email", label: "Сортировать по email" },
];

const Control = ({ children, ...props }: ControlProps<FilterOption, false>) => {
  return <components.Control {...props}>{children}</components.Control>;
};

type CustomSelectPropsTS = {
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
};

const CustomSelectProps = ({ setSelectValue }: CustomSelectPropsTS) => {
  // const [selectValue, setSelectValue] = useState<
  //   FilterOption | MultiValue<FilterOption>
  // >();

  // useEffect(() => {
  // заглушка пока нет логики сортировки
  //   console.log(selectValue);
  // }, [selectValue]);

  const styles: StylesConfig<FilterOption, false> = {
    control: (css) => ({ ...css, paddingLeft: "1rem", cursor: "pointer" }),
  };

  // setSelectValue("last_name");

  return (
    <Select
      components={{ Control }}
      isSearchable={false}
      name="filter"
      options={filterOptions}
      styles={styles}
      onChange={(newValue) => {
        setSelectValue(newValue.value);
      }}
      placeholder="Выберите фильтр"
      // onCreateOption={handleCreate}
    />
  );
};

type UserProps = {
  users: UserType[];
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
};

const UsersTemplate = ({ users, setSelectValue }: UserProps) => {
  return (
    <>
      <Head>
        <title>Список пользователей</title>
      </Head>
      <div>
        <CustomSelectProps setSelectValue={setSelectValue} />
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default UsersTemplate;
