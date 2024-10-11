import useSWR from "swr"

const fetcher = (url: string, options = {}) =>
  fetch(url, options)
    .then((res) => res.json())
    .then((json) => json.data)
    .catch((error) => {
      throw new Error(error)
    })

export const profileAPI = {
  get: (userId) => fetcher(`${process.env.USERS_URL}/?id=${userId}`),
  getAll: () => fetcher(`${process.env.USERS_URL}?per_page=12`),
  useGetSWR: (userId) => useSWR(`${process.env.USERS_URL}/?id=${userId}`, fetcher),
  useGetAllSWR: () => useSWR(`${process.env.USERS_URL}?per_page=12`, fetcher),
}
