import { useRouter } from "next/router"
import { en } from "@/locales/en"
import { ru } from "@/locales/ru"

export const useLocale = () => {
  const { locale } = useRouter()
  return locale === "ru" ? ru : en
}
