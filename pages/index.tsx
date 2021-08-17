import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styles2 from "../styles/scss/test.module.scss";
// import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
// import { di2 } from "../store/actions/test";
import type { AppProps } from "next/app";
import Layout_satu from "~/layout/layout_1";
import axios from "axios";
import useSWR from "swr";

export default function Home({ Component, pageProps }: any) {
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
      <Layout_satu>
        <div className="row flex-row">
          <div className="col-2">test</div>
          <div className="col-2">test</div>
          <div className="col">test</div>
        </div>
        <h5 className="text-primary">test</h5>
      </Layout_satu>
    </div>
  );
}
