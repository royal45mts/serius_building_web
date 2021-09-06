import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import type { AppProps } from "next/app";
import Layout_default from "~/layout/layout_default";
import useSwr from "swr";
import Cookies from "js-cookie";
import axios from "axios";
import { useReducer, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "~/store_context/hook";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "~/store_context/reducers/redux_1";
const Home = ({ children }: any) => {
  /*const fetcher = (url: any) =>
    fetch(url, {
      method: "post", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(data_produk), // body data type must match "Content-Type" header
    }).then((res) => res.json());
  const { data, error } = useSwr(`/api/sundareka`, fetcher);*/
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  return (
    <Layout_default>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "tr" })}
        >
          send
        </button>
        <h1>Welcome to the greatest app in the world!</h1>
        <h2>
          The current number is
          {count}
        </h2>
        <div>
          <input
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(Number(e.target.value))}
            type="number"
          />
          <button
            onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
          >
            Increment by amount
          </button>
        </div>
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
