import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from "@vercel/analytics/react"
// import { SpeedInsights } from "@vercel/speed-insights/next"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      {/* <SpeedInsights /> */}
    </>
  )
}

export default MyApp
