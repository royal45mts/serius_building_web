import { useState } from "react";
type redux_2_ContextType = {
  user: boolean;
  trigger: () => void;
};
class redux {
  constructor() {}
  data() {
    return {
      user: false,
      trigger: () => {},
    };
  }
  test(state: number = 1, action: any) {
    switch (action.type) {
      case "test": {
        return state + action.payload;
      }
      default: {
        return state;
      }
    }
  }
}

export default redux;
export type { redux_2_ContextType };
