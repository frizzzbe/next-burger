import { useRouter } from "next/router"
import en from "@/locales/en"
import ru from "@/locales/ru"

export default function useLocale() {
  const router = useRouter()
  const { locale } = router
  return locale === "ru" ? ru : en
}
