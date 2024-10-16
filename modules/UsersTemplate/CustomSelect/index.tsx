import { useContext, useId } from "react"
import Select, { components, ControlProps } from "react-select"
import { useLocale } from "@/hooks/useLocale"
import type { FilterOption } from "../types"
import { SelectContext } from "@/pages/users"

export const CustomSelect = () => {
  const { selectValue, setSelectValue } = useContext(SelectContext)
  const i18n = useLocale()
  const styles = {
    control: (css) => ({ ...css, cursor: "pointer" }),
    option: (css) => ({ ...css, cursor: "pointer" }),
  }

  const filterOptions: FilterOption[] = [
    { value: "id", label: i18n.usersSortItem1 },
    { value: "first_name", label: i18n.usersSortItem2 },
    { value: "last_name", label: i18n.usersSortItem3 },
    { value: "email", label: i18n.usersSortItem4 },
  ]

  const Control = ({ children, ...props }: ControlProps<FilterOption, false>) => {
    return <components.Control {...props}>{children}</components.Control>
  }

  const getControlByValue = (str): FilterOption => {
    return filterOptions.find((obj) => obj.value === str)
  }

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
        setSelectValue(newValue.value)
      }}
    />
  )
}
