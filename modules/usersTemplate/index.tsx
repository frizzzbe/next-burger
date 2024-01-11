import React, { useId } from "react";
import Head from "next/head";
import type { UserType } from "../../types/userTypes";
import UserCard from "./UserCard";
import Select, { components, ControlProps, StylesConfig } from "react-select";

interface FilterOption {
  value: string;
  label: string;
}

type CustomSelectPropsTS = {
  selectValue: string;
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
};

const filterOptions: FilterOption[] = [
  { value: "id", label: "Сортировать по ID пользователя" },
  { value: "first_name", label: "Сортировать по имени" },
  { value: "last_name", label: "Сортировать по фамилии" },
  { value: "email", label: "Сортировать по email" },
];

const Control = ({ children, ...props }: ControlProps<FilterOption, false>) => {
  return <components.Control {...props}>{children}</components.Control>;
};

const getControlByValue = (str: string): FilterOption => {
  return filterOptions.find((obj) => obj.value === str);
};

const CustomSelectProps = ({
  selectValue,
  setSelectValue,
}: CustomSelectPropsTS) => {
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
      placeholder="Выберите фильтр"
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: "#ffda58",
          primary: "#ffc600",
        },
      })}
      instanceId={useId()}
      defaultValue={getControlByValue(selectValue)}
      onChange={(newValue) => {
        setSelectValue(newValue.value);
      }}
    />
  );
};

type UserProps = {
  users: UserType[];
  selectValue: string;
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
};

const UsersTemplate = ({ users, selectValue, setSelectValue }: UserProps) => {
  return (
    <>
      <Head>
        <title>Список пользователей</title>
      </Head>
      <div>
        <CustomSelectProps
          selectValue={selectValue}
          setSelectValue={setSelectValue}
        />
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default UsersTemplate;
