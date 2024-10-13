import { useRouter } from "next/router"
import { ru, en } from "@/locales"

export const useLocale = () => {
  const { locale } = useRouter()
  return locale === "ru" ? ru : en
}
