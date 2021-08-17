import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import styles2 from "../styles/scss/test.module.scss";
import type { AppProps } from "next/app";

export default function layout_1({ children, Test }: any) {
  return (
    <div className={styles2.container}>
      <div>{children}</div>
    </div>
  );
}
