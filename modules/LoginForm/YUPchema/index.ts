import * as yup from "yup"
import { useLocale } from "@/hooks/useLocale"

export const useYUPConfig = () => {
  const i18n = useLocale()

  yup.setLocale({
    string: {
      email: i18n.yupErrorMail,
      min: ({ min }) => `${i18n.yupErrorMin + min}`,
      max: ({ max }) => `${i18n.yupErrorMax + max}`,
    },
    mixed: {
      required: i18n.yupErrorRequired,
    },
  })

  return yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  })
}
