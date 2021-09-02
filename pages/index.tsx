import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import type { AppProps } from "next/app";
import Layout_satu from "../components/layout_satu";
import useSwr from "swr";

import axios from "axios";
import { useAuth } from "~/store_context";
import { useReducer, useState, useEffect } from "react";
import { useRouter } from "next/router";
const Home = ({ children }: any) => {
  type Datas = {
    context?: any;
    context_api?: any;
  };
  const store: Datas = useAuth();
  const [state, dispatch]: any = useReducer(
    store.context_api["dispatch/nama"].actions,
    store.context_api["store/nama"]
  );

  const [bolean, set_bolean] = useState(false);
  const data_produk = {
    name: "produk",
    data: {
      identity: "admin@admin.com",
      password: "12345",
    },
  };
  /*const fetcher = (url: any) =>
    fetch(url, {
      method: "post", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(data_produk), // body data type must match "Content-Type" header
    }).then((res) => res.json());
  const { data, error } = useSwr(`/api/sundareka`, fetcher);*/

  console.log(bolean, "check_data");
  if (bolean) {
    axios
      .post("/api/sundareka", data_produk)
      .then((r) => {
        console.log(r, "check_data");
      })
      .catch((error) => {
        console.log(error, "check_data");
      });
  }
  return (
    <div>
      {JSON.stringify(bolean)}
      {JSON.stringify(state)}
      <button
        className="btn btn-primary"
        onClick={() => set_bolean((b) => (b = true))}
      >
        send
      </button>
    </div>
  );
};

export default Home;
