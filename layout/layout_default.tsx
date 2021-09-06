import styles2 from "../styles/scss/test.module.scss";
import type { AppProps } from "next/app";
import Com_navbar from "~/components/com_navbar";
import { useEffect, useReducer, useState } from "react";
import { useAppSelector } from "~/store_context/hook";
import { selectCount } from "~/store_context/reducers/redux_1";

export default function Layout_default({ children, Test }: any) {
  const count = useAppSelector(selectCount);

  return (
    <div>
      <Com_navbar />
      {count}
      {children}
    </div>
  );
}
