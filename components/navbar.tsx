import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import styles2 from "~/styles/scss/navbar.module.scss";
import type { AppProps } from "next/app";

export default function navbar({ children, Test }: any) {
  return (
    <div className={styles2.container}>
      <div>test</div>
    </div>
  );
}
