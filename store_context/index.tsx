import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterReducer from "~/store_context/reducers/redux_1";
import counterReducer2 from "~/store_context/reducers/redux_1";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counter2: counterReducer2,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
