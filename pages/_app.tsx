import { useEffect, useState } from "react"
import Head from "next/head"
import NextNProgress from "nextjs-progressbar"
import { getCookie } from "cookies-next"
import { Layout } from "@/components/Layout"
import { AuthContext } from "@/context/AuthContext"
import type { MyAppProps } from "@/types/appTypes"
import "@/styles/globals.css"

App.getInitialProps = async ({ ctx }) => {
  return {
    isLogged: !!ctx.req?.cookies?.userId,
  }
}

export default function App({ Component, pageProps, isLogged }: MyAppProps) {
  const [isAuth, setIsAuth] = useState(isLogged)
  const userId = getCookie("userId")

  useEffect(() => {
    setIsAuth(!!userId)
  }, [userId])

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <Layout>
        <Head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </Head>
        <NextNProgress
          color="#ffc600"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
          options={{ showSpinner: false }}
        />
        <Component {...pageProps} />
      </Layout>
    </AuthContext.Provider>
  )
}
