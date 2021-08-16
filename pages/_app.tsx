import "../styles/globals.css";
import { Provider } from "react-redux";
import stores from "../store/store";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import { AuthProvider } from "~/store_context";

function MyApp({ Component, pageProps }: AppProps) {
  // const store = useStore(pageProps.initialReduxState);

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
