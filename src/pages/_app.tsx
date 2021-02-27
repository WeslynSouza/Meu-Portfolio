import { MenuProvider } from '../contexts/menuContext';
import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MenuProvider>
      <Head>
        <title>Meu portfólio</title>
      </Head>
      <Component {...pageProps} />
    </MenuProvider>
  )
}

export default MyApp
