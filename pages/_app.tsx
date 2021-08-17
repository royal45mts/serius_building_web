import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AuthProvider } from "~/store_context";
import { useEffect } from "react";
// import "bootstrap/dist/js/bootstrap.min.js";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap.bundle.min")
      : null;
  }, []);
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
