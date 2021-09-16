import "../server/firebaseConect"
import '../ui/styles/global.css'
import "../ui/nprogress.css"
import { AppProps } from 'next/app';
import { UtilsContextProvider } from "../Contexts/UtilsContext";
import NProgress from "nprogress";
import router from "next/router"
router.events.on("routeChangeStart", (url) => {
  NProgress.start()
})
router.events.on("routeChangeComplete", (url) => {
  NProgress.done()
})
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UtilsContextProvider>
        <Component {...pageProps} />
    </UtilsContextProvider>

  );
}

export default MyApp
