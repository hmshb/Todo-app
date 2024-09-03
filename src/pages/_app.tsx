import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Itim } from "@next/font/google"

const itim = Itim({
  weight: ["400"],
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={itim.className}>
      <Component {...pageProps} />
    </main>
  )
}
