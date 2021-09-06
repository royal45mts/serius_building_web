import styles2 from "../styles/scss/test.module.scss";
import type { AppProps } from "next/app";
import Com_navbar from "~/components/com_navbar";
import { useAuth } from "~/store_context";
import { useEffect, useReducer, useState } from "react";

export default function Layout_default({ children, Test }: any) {
  return (
    <div>
      <Com_navbar />
      {children}
    </div>
  );
}
