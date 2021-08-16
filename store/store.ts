import { createStore, applyMiddleware } from "redux";
import allstore from "./index";
import thunk from "redux-thunk";

const store = createStore(allstore, {}, applyMiddleware(thunk));
export default store;
