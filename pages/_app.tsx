import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AuthProvider } from "~/store_context";
import "b";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
