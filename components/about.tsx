import { useLocale } from "@/hooks/useLocale"

export const About = () => {
  const i18n = useLocale()
  return (
    <div>
      <h2>{i18n.about}</h2>
      <p>{i18n.aboutP1}</p>
      <p>{i18n.aboutP2}</p>
      <p>{i18n.aboutP3}</p>
    </div>
  )
}
