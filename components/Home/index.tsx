import { FC } from "react"
import useLocale from "@/hooks/useLocale"
import Image from "next/image"
import Link from "next/link"
import styles from "./Home.module.css"

const Home: FC = () => {
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

export default Home
