import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import type { AppProps } from "next/app";
import Layout_satu from "../components/layout_satu";
import axios from "axios";
const Home = ({ Component, pageProps }: AppProps) => {
  axios
    .get("/api/hello", {
      params: { limit: "1", page: "1" },
    })
    .then((r) => {
      console.log(r, "1");
      return r;
    })
    .then((r) => {
      console.log(r, "2");
    })
    .catch((error) => {});

  let order = (time: number, name: string) => {
    setTimeout(function () {
      console.log(` was selected ${name}`);

      // Order placed. Call production to start
    }, time);

    // function 👇 is being called
  };

  let production = async () => {
    await order(3000, "test 1");
    console.log("Production has started" + " " + "name");
    order(5000, "test2");
    order(3000, "test 2");
  };
  production();
  /*const fetcher = (url: any) => fetch(url).then((res) => res.json());

                                                const { data } = useSWR("/api/hello", fetcher);
                                                console.log(data);*/
  // const Layout = Component;

  return (
    <div>
      <Layout_satu Test={<h5>aws</h5>}>
        <h5>test</h5>
        <h5>test a</h5>
      </Layout_satu>
    </div>
  );
};

export default Home;
