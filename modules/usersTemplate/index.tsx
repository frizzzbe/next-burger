import React, { useId } from "react";
import Head from "next/head";
import type { UserType } from "../../types/userTypes";
import UserCard from "./UserCard";
import Select, { components, ControlProps, StylesConfig } from "react-select";

interface FilterOption {
  value: string;
  label: string;
}

const filterOptions: FilterOption[] = [
  { value: "id", label: "Сортировать по ID пользователя" },
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
  const styles: StylesConfig<FilterOption, false> = {
    control: (css) => ({ ...css, paddingLeft: "1rem", cursor: "pointer" }),
  };

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
      instanceId={useId()}
      defaultValue={{ value: "id", label: "Сортировать по ID пользователя" }}
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
