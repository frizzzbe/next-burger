import useSWR, { type Fetcher } from "swr"
import type { UserType } from "@/types/userTypes"

const baseUrl = "https://reqres.in/api/users"

const fetcher: Fetcher<UserType, string> = (...args) =>
  fetch(...args)
    .then((res) => res.json())
    .then((json) => json.data)
    .catch((error) => {
      throw new Error(error)
    })

const fetchData = async (url) => {
  const response = await fetch(url)
  const { data } = await response.json()
  return data
}

export const ProfileAPI = {
  get: (userId) => fetchData(`${baseUrl}/?id=${userId}`),
  getAll: () => fetchData(`${baseUrl}?per_page=12`),
  getClient: (userId) => useSWR(`${baseUrl}/?id=${userId}`, fetcher),
  getAllClient: () => useSWR(`${baseUrl}?per_page=12`, fetcher),
}
