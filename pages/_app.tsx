import type { AppProps } from "next/app"
import NextNProgress from "nextjs-progressbar"
import { Layout } from "@/components/Layout/layout"
import "@/styles/globals.css"
import Head from "next/head"

export default function App({ Component, pageProps }: AppProps) {
  return (
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
  )
}
