import { axios_api } from "~/scripts";

class redux {
  data() {
    return {
      user: null,
    };
  }
  actions(state: any, action: any) {
    /*switch (action.type) {
      case "tr": {
        return { user: (state.user = true) };
      }
      default: {
        throw new Error();
      }
    }*/
    switch (action.type) {
      case "api": {
        axios_api
          .get("/v1/user/signin")
          .then((r) => {
            console.log(r, "check_data");
          })
          .catch((error) => {
            return {
              user: (state.user = true),
            };
          });
        return {
          user: (state.user = true),
        };
      }
      default: {
        throw new Error();
      }
    }
  }
}

export default redux;
