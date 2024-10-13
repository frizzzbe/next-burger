import Image from "next/image"
import Link from "next/link"
import { useLocale } from "@/hooks/useLocale"
import styles from "./Home.module.css"

export const Home = () => {
  const i18n = useLocale()
  return (
    <>
      <h1 className={styles.mainPage}>{i18n.main}</h1>
      <div className={styles.mainImage}>
        <Image src="/fatburger.png" width={300} height={200} alt={i18n.mainTitle} />
      </div>
      <p className={styles.text}>{i18n.mainP1}</p>
      <p className={styles.text}>{i18n.mainP2}</p>
      <Link href="/burgers" className="btn center">
        {i18n.allBurgers}
      </Link>
    </>
  )
}
