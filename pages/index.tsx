import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import type { AppProps } from "next/app";
import Layout_default from "~/layout/layout_default";
import useSwr from "swr";
import Cookies from "js-cookie";
import axios from "axios";
import { useAuth } from "~/store_context";
import { useReducer, useState, useEffect } from "react";
import { useRouter } from "next/router";

class Test {
  nama: string;
  constructor(data?: any) {
    this.nama = "w";
    console.log(data, "test");
  }
  public dispart() {
    type Datas = {
      context?: any;
      context_api?: any;
    };

    const store: Datas = useAuth();
    const [state, dispatch]: any = useReducer(
      store.context["dispatch/redux_1"].actions,
      store.context["store/redux_1"]
    );
    return { state, dispatch };
  }
  public set_boolean() {
    type Bolean2 = [any, any];

    const [bolean, set_bolean]: Bolean2 = useState(false);
    const data_produk = {
      name: "produk",
      data: {
        identity: "admin@admin.com",
        password: "12345",
      },
    };
    useEffect(() => {
      if (bolean === true) {
        /*axios
          .post("/api/sundareka", data_produk)
          .then((r) => {
            console.log(r, "check_data");
          })
          .catch((error) => {
            console.log(error, "check_data");
          });*/
        // Cookies.set("user", "da");
        // Cookies.remove("user");
        // console.log(document.cookie);
        set_bolean(false);
      }
    }, [bolean]);
    return { bolean, set_bolean };
  }
}
const Home = ({ children }: any) => {
  const { state, dispatch } = new Test().dispart();
  const { bolean, set_bolean } = new Test().set_boolean();
  /*const fetcher = (url: any) =>
    fetch(url, {
      method: "post", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(data_produk), // body data type must match "Content-Type" header
    }).then((res) => res.json());
  const { data, error } = useSwr(`/api/sundareka`, fetcher);*/

  return (
    <Layout_default>
      <div>
        {JSON.stringify(state)}
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "tr" })}
        >
          send
        </button>
      </div>
    </Layout_default>
  );
};
/*export async function getStaticProps(req: any, res: any) {
  console.log(req, res, "check_data");

  return {
    props: {},
  };
}*/
/*export async function getStaticPaths() {
  return {
    paths: [
      { params: {} }, // See the "paths" section below
    ],
    fallback: true, // See the "fallback" section below
  };
}*/
/*export async function getServerSideProps(context: any) {
  console.log(context, "check_data");
  return {
    props: {}, // will be passed to the page component as props
  };
}*/
export default Home;
export { Test };
