import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import type { AppProps } from "next/app";
import Layout_satu from "../components/layout_satu";
import axios from "axios";
import { useAuth } from "~/store_context";
import { useReducer } from "react";
const Home = ({ children }: any) => {
  const get_api = () => {
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
  };
  type Datas = {
    dispatch?: any;
    dispatch2?: any;
    store?: any;
  };
  const store: Datas = useAuth();
  // const store1: Datas = useAppContext;
  const [state, dispatch]: any = useReducer(store.dispatch2.actions, store);
  console.log(store, "check_data");

  return (
    <div>
      {JSON.stringify(state.number)}
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "plus" })}
      >
        send
      </button>
    </div>
  );
};

export default Home;
