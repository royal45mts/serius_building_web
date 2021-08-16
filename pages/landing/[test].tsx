import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import styles from "../../styles/Home.module.css";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function Test() {
  const { data, error } = useSWR("/api/hello", (url) =>
    fetch(url).then((res) => res.text())
  );
  let url = new URL("https://example.com");
  let getdata = new URLSearchParams(url.search);
  getdata.append("aws", "2");
  getdata.append("aws2", "2");
  console.log(getdata.toString());
  return (
    <div>
      <h5>test</h5>
      <button type="button" className="btn btn-primary">
        Prim
      </button>
    </div>
  );
}
