import '../styles/globals.scss'
import { ColorModeScript } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ColorModeScript />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
