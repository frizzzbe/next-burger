export const getBurgers = async (locale, id = undefined) => {
  const lang = locale === "ru" ? "" : "En"
  const burgerId = id ? `?id=${id}` : ""
  const response = await fetch(`${process.env.MOKKY_URL}/burgers${lang + burgerId}`)
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong")
  }

  return data
}
