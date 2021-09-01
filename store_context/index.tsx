import { createContext, useReducer, useContext, useState } from "react";
import redux_1 from "~/store_context/reducers/redux_1";
import redux_2 from "~/store_context/reducers/redux_2";
import api_context from "~/store_context/api/nama";

export const Context = createContext({});
export function AuthProvider({ children }: any) {
  // const reducer = new redux_1();
  const store = new redux_1();
  const store2 = new redux_2();
  const api = new api_context();
  const value = {
    context: {
      "dispatch/redux_1": store,
      "dispatch/redux_2": store2,
      "store/redux_1": store.data(),
      "store/redux_2": store2.data(),
    },
    context_api: {
      "dispatch/nama": api,
      "store/nama": api.data(),
    },
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useAuth() {
  return useContext(Context);
}
