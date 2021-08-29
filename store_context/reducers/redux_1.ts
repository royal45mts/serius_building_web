import { useState } from "react";
type redux_1_ContextType = {
  user: boolean;
  login: () => void;
  logout: () => void;
};
class redux {
  data() {
    return {
      user: false,
      aws: 0,
    };
  }
  actions(state: any, action: any) {
    switch (action) {
      case "test": {
        return (state += 1);
      }
      default: {
        return (state -= 1);
      }
    }
  }
}

export default redux;
export type { redux_1_ContextType };
