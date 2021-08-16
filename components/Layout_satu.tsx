import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import styles2 from "../styles/scss/test.module.scss";
import type { AppProps } from "next/app";

export default function layout_satu({ children, Test }: any) {
  return <div className={styles2.container}>{children}</div>;
}
