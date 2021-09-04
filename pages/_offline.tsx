import Head from "next/head";
import Layout_satu from "~/components/com_satu";
import { AppProps } from "next/app";

export default function _offline({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>next-pwa example</title>
      </Head>
      <h1>This is offline fallback page</h1>
      <h2>When offline, any page route will fallback to this page</h2>
    </div>
  );
}
