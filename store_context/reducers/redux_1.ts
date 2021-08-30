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
      login: () => {},
      logout: () => {},
    };
  }
  actions(state: any, action: any) {
    switch (action.type) {
      case "test": {
        return (state = false);
      }
      default: {
        return state;
      }
    }
  }
}

export default redux;
export type { redux_1_ContextType };
