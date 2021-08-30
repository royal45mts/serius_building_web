import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useReducer,
} from "react";
import redux_1 from "~/store_context/reducers/redux_1";
export const AuthContext = createContext({});
export function AuthProvider({ children }: any) {
  // const reducer = new redux_1();
  const store = new redux_1();
  const [state1, dispatch1] = useReducer(store.actions, store.data());

  return (
    <div>
      <AuthContext.Provider value={{ state1, dispatch1 }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}
