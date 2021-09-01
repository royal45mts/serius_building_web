import { axios_api } from "~/scripts";
import useSwr from "swr";

class redux {
  data() {
    return {
      user: true,
    };
  }
  actions(state: any, action: any) {
    switch (action.type) {
      case "api": {
        return {
          user: (state.user = false),
        };
      }
      default: {
        throw new Error();
      }
    }
  }
}

export default redux;
