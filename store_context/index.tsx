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
  /*function reducer(state: any, action: any) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }*/
  const store = new redux_1();
  const data = {
    ...store.data(),
  };

  const [state1, dispatch1] = useReducer(store.actions, data);

  return (
    <div>
      <AuthContext.Provider value={{ state1, dispatch1 }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}
