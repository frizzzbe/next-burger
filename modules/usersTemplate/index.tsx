import { UserCard } from "./UserCard"
import type { UserProps } from "./types"
import { CustomSelect } from "./CustomSelect"

export const UsersTemplate = ({ users }: UserProps) => {
  return (
    <>
      <CustomSelect />
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  )
}
