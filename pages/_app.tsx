import "../styles/globals.scss";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "swiper/scss";

import { Provider } from "react-redux";
import { useEffect } from "react";
import { store } from "~/store_context";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap.bundle.min")
      : null;
  }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
