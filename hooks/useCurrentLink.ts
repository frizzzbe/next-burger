export default function useCurrentLink(pathname, query) {
  let url = pathname;
  for (const [key, value] of Object.entries(query)) {
    url = url.replace(`[${key}]`, value);
  }
  const queryString = new URLSearchParams(query).toString();
  return `${url}${queryString ? "?" + queryString : ""}`;
}
