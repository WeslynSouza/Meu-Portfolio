import { MenuProvider } from '../contexts/menuContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MenuProvider>
      <Component {...pageProps} />
    </MenuProvider>
  )
}

export default MyApp
