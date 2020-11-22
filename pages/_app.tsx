import type { AppProps } from 'next/app'
import '../tailwind.output.css'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
