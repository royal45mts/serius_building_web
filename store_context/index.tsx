import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useReducer,
  useMemo,
} from "react";
import redux_1 from "~/store_context/reducers/redux_1";
import redux_2 from "~/store_context/reducers/redux_2";
export const AuthContext = createContext({});
export function AuthProvider({ children }: any) {
  const store = new redux_1();
  const store2 = new redux_2();
  const data = () => {};
  const [state1, dispatch1] = useReducer(store.actions, store.data());
  const stores = useMemo(() => [state1, dispatch1], [state1]);
  return (
    <div>
      <AuthContext.Provider value={stores}>{children}</AuthContext.Provider>
    </div>
  );
}
