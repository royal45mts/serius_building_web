import Head from "next/head";
import Image from "next/image";
// import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
// import { di2 } from "../store/actions/test";
import type { AppProps } from "next/app";
import Layout_satu from "~/layout/layout_1";
import axios from "axios";
import useSWR from "swr";
import { useContext } from "react";
import { AuthContext } from "~/store_context";

export default function Home({ Component, pageProps }: any) {
  const bubbleseort = () => {
    let array = [5, 6, 1, 9, 4, 2, 4, 5, 2];
    // bubble sort
    /* let swab = false;
    for (let i = array.length - 1; i >= 0; i--) {
      swab = true;
      for (let j = 0; j < i; j++) {
        if (array[j] > array[j + 1]) {
          let tem = array[j];
          array[j] = array[j + 1];
          array[j + 1] = tem;
          swab = false;
        }
      }
      if (swab) {
        break;
      }
    }*/

    // selection sort
    /*let swab = (arr: any, idx1: any, idex2: any) => {
      [arr[idx1], arr[idex2]] = [arr[idex2], arr[idx1]];
    };
    for (let i = 0; i < array.length; i++) {
      let lowers = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[lowers]) {
          lowers = j;
        }
      }
      if (i !== lowers) {
        swab(array, i, lowers);
      }
      /!* let tem = array[i];
      array[i] = array[lowers];
      array[lowers] = tem;*!/
    }

    let cek = array.filter((f, i, arr) => {
      return i === arr.findIndex((f2) => f2 === f);
    });*/
    // insertion sort
    for (let i = 1; i < array.length; i++) {
      let j = 0;
      let currency_var = array[i];
      for (j = i - 1; j >= 0 && array[j] > currency_var; j--) {
        array[j + 1] = array[j];
      }
      array[j + 1] = currency_var;
    }
    return array;
  };
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

  type redux_1_ContextType = {
    stores?: any;
    dispatch1?: any;
  };
  let context: redux_1_ContextType = useContext(AuthContext);
  console.log(bubbleseort(), "check_data");

  return (
    <div>
      <Layout_satu>
        {/*<div className="row flex-row">
          <div className="col-2">test</div>
          <div className="col-2">test</div>
          <div className="col">test</div>
        </div>*/}
        {context.stores[0].aws} aws
        <button
          className="btn btn-primary"
          onClick={() => {
            context.dispatch1("aws", "test");
          }}
        >
          test
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            context.dispatch1("aws", "aws");
          }}
        >
          test
        </button>
        <h5 className="text-primary">test</h5>
      </Layout_satu>
    </div>
  );
}
