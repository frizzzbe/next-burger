import React, { useId } from "react";
import type { UserType } from "@/types/userTypes";
import UserCard from "./UserCard";
import useLocale from "@/hooks/useLocale";
import Select, { components, ControlProps, StylesConfig } from "react-select";

interface FilterOption {
  value: string;
  label: string;
}

type CustomSelectPropsTS = {
  selectValue: string;
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
};

const CustomSelectProps = ({ selectValue, setSelectValue }: CustomSelectPropsTS) => {
  const i18n = useLocale();
  const styles: StylesConfig<FilterOption, false> = {
    control: (css) => ({ ...css, paddingLeft: "1rem", cursor: "pointer" }),
  };

  const filterOptions: FilterOption[] = [
    { value: "id", label: i18n.usersSortItem1 },
    { value: "first_name", label: i18n.usersSortItem2 },
    { value: "last_name", label: i18n.usersSortItem3 },
    { value: "email", label: i18n.usersSortItem4 },
  ];

  const Control = ({ children, ...props }: ControlProps<FilterOption, false>) => {
    return <components.Control {...props}>{children}</components.Control>;
  };

  const getControlByValue = (str: string): FilterOption => {
    return filterOptions.find((obj) => obj.value === str);
  };

  return (
    <Select
      components={{ Control }}
      isSearchable={false}
      name="filter"
      options={filterOptions}
      styles={styles}
      placeholder={i18n.usersFilter}
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
      <div>
        <CustomSelectProps selectValue={selectValue} setSelectValue={setSelectValue} />
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default UsersTemplate;
