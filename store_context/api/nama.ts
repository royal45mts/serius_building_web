import { axios_api } from "~/scripts";
import useSwr from "swr";

class redux {
  data() {
    return {
      user: null,
    };
  }
  actions(state: any, action: any) {
    switch (action.type) {
      case "api": {
        const Data_produk = {
          data: "",
        };
        const fetcher = (url: any) =>
          fetch(url, {
            method: "post", // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify(Data_produk), // body data type must match "Content-Type" header
          }).then((res) => res.json());
        const { data, error } = useSwr(`/api/sundareka`, fetcher);
        if (data) {
          return {
            user: (state.user = true),
          };
        } else {
          return {
            user: (state.user = false),
          };
        }
      }
      default: {
        throw new Error();
      }
    }
  }
}

export default redux;
