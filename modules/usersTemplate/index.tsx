import { FC, useEffect } from "react";
import Head from "next/head";
import type { UsersType } from "../../types/userTypes";
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

const CustomSelectProps = (props: Props<FilterOption>) => {
  const [selectValue, setSelectValue] = useState<
    FilterOption | MultiValue<FilterOption>
  >();

  useEffect(() => {
    // заглушка пока нет логики сортировки
    console.log(selectValue);
  }, [selectValue]);

  const styles: StylesConfig<FilterOption, false> = {
    control: (css) => ({ ...css, paddingLeft: "1rem", cursor: "pointer" }),
  };

  return (
    <Select
      {...props}
      components={{ Control }}
      isSearchable={false}
      name="filter"
      options={filterOptions}
      styles={styles}
      onChange={(newValue) => {
        setSelectValue(newValue);
      }}
      placeholder="Выберите фильтр"
      // onCreateOption={handleCreate}
    />
  );
};

const UsersTemplate: FC<UsersType> = ({ users }: UsersType) => {
  return (
    <>
      <Head>
        <title>Список пользователей</title>
      </Head>
      <div>
        <CustomSelectProps />
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default UsersTemplate;
