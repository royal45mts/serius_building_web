import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AuthProvider } from "~/store_context";
// import "bootstrap/dist/js/bootstrap.min.js";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
