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
import Image_corusel from "~/components/com_image_carousel";
import { useAppDispatch, useAppSelector } from "~/store_context/hook";
import {
  show_true,
  show_false,
  increment_true_false,
  increment_tambah,
  selectCount,
} from "~/store_context/reducers/menu";
import { pouchdb } from "~/scripts/pouchdb";
import { desing_document } from "~/scripts/desing_document";
const Home = ({ children, externalPostData }: any) => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);
  const database = ["product", "user", "category"];
  useEffect(() => {}, []);
  // methods
  const saveData = () => {
    pouchdb("serius", "product")
      .remote.post({
        email: "test",
      })
      .then((r) => {
        console.log(r);
      });
  };
  return (
    <Layout_default>
      <div>
        <div className={`m-2`}>
          <Image_corusel />
        </div>
        {/*  {JSON.stringify(count)}

        <div>
          <button onClick={() => dispatch(increment_tambah(2))}>
            Increment by amount
          </button>
        </div>
        */}
        <button
          className={`btn btn-primary`}
          onClick={() => {
            saveData();
          }}
        >
          Send
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
export async function getStaticProps(context: any) {
  return {
    /*redirect: {
      // destination: "/api",
    },*/
    props: {
      externalPostData: JSON.stringify({
        data: "test",
      }),
    },
  };
}

/*const fetcher = (url: any) =>
  fetch(url, {
    method: "post", // *GET, POST, PUT, DELETE, etc.
    body: JSON.stringify(data_produk), // body data type must match "Content-Type" header
  }).then((res) => res.json());
const { data, error } = useSwr(`/api/sundareka`, fetcher);*/
