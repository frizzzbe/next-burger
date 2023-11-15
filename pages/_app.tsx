import type { AppProps } from 'next/app'
import Layout from "../components/layout";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
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
  );
}
