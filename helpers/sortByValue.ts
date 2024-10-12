export const sortByValue = (data, value) => {
  return data.sort((a, b) => {
    const val1 = typeof a[value] === "string" ? a[value].toUpperCase() : a[value]
    const val2 = typeof b[value] === "string" ? b[value].toUpperCase() : b[value]
    return val1 < val2 ? -1 : val1 > val2 ? 1 : 0
  })
}
