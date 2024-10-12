import Head from "next/head"
import { useLocale } from "@/hooks/useLocale"
import { balsamiqSans } from "@/fonts"
import cn from "classnames"
import { Header } from "../Header"
import { Footer } from "../footer"
import type { LayoutProps } from "./types"

export const Layout = ({ children }: LayoutProps) => {
  const i18n = useLocale()
  return (
    <>
      <Head>
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
