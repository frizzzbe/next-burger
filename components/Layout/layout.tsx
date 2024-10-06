import type { FC } from "react"
import Header from "../Header"
import Footer from "../footer"
import Head from "next/head"
import useLocale from "@/hooks/useLocale"
import cn from "classnames"
import { balsamiqSans } from "@/fonts"
import type { LayoutProps } from "./types"

const Layout: FC<LayoutProps> = ({ children }) => {
  const i18n = useLocale()
  return (
    <>
      <Head>
        <title>{i18n.mainTitle}</title>
        <meta name="description" content={i18n.pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={cn(balsamiqSans.className, "content")}>
        <Header />
        <main className="mainWrapper">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
