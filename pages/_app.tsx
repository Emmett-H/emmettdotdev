import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { Navigation } from "../components/navigation"
import { Footer } from "../components/footer"
import { ThemeProvider } from 'next-themes'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class" enableSystem={false}>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>

  )
}

export default MyApp
