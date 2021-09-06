import styles2 from "../styles/scss/test.module.scss";
import type { AppProps } from "next/app";
import Com_navbar from "~/components/com_navbar";
import { useEffect, useReducer, useState } from "react";
import { useAppDispatch, useAppSelector } from "~/store_context/hook";
import {
  increment_true_false,
  selectCount,
} from "~/store_context/reducers/menu";

export default function Layout_default({ children, Test }: any) {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  return (
    <div>
      <Com_navbar />
      {children}
    </div>
  );
}
