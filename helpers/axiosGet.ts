import axios from "axios"

export const axiosGet = (url: string) =>
  axios
    .get(url)
    .then((res) => res.data)
    .catch((error) => {
      console.error("error:", error)
    })
