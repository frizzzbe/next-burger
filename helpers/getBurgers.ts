import { axiosGet } from "./axiosGet"

export const getBurgers = async (locale, id = undefined) => {
  const lang = locale === "ru" ? "" : "En"
  const burgerId = id ? `?id=${id}` : ""
  const apiUrl = `${process.env.MOKKY_URL}/burgers${lang + burgerId}`
  const data = await axiosGet(apiUrl)
  return data
}
