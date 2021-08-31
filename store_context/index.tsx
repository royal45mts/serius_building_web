import { createContext, useReducer, useContext, useState } from "react";
import redux_1 from "~/store_context/reducers/redux_1";

export const Context = createContext({});
export function AuthProvider({ children }: any) {
  // const reducer = new redux_1();
  const store = new redux_1();
  const value = {
    ...store.data(),
    dispatch: store.actions,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useAuth() {
  return useContext(Context);
}
