import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import styles from "../../styles/Home.module.css";
import useSWR from "swr";
import { useRouter } from "next/router";

import { AuthContext } from "~/store_context/index";
import { useContext, useState } from "react";
export default function Aws() {
  type redux_1_ContextType = {
    state1?: any;
    dispatch1?: any;
  };
  let context: redux_1_ContextType = useContext(AuthContext);
  /* const { data, error } = useSWR("/api/hello", (url) =>
    fetch(url).then((res) => res.text())
  );
  let url = new URL("https://example.com");
  let getdata = new URLSearchParams(url.search);
  getdata.append("aws", "2");
  getdata.append("aws2", "2");*/
  //

  console.log(context.state1, "check");
  return (
    <div className={styles.home}>
      <h5>test</h5>
      <h5>{context.state1.count}</h5>
      <button
        onClick={() => context.dispatch1({ type: "decrement" })}
        type="button"
        className="btn btn-primary"
      >
        Prim
      </button>
    </div>
  );
}
/*
export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: "/",
    },
    props: {}, // will be passed to the page component as props
  };
}*/
