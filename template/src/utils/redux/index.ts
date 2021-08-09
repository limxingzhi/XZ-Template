import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { appconfigSlice, IAppconfig } from "./appconfigSlice";
import { authdataSlice, IAuthdata } from "./authdataSlice";

interface IGlobalState {
  appconfig: IAppconfig,
  authdata: IAuthdata,
}

const store = configureStore({
  reducer: combineReducers({
    appconfig: appconfigSlice.reducer,
    authdata: authdataSlice.reducer,
  }),
  devTools: true,
});

export { store, appconfigSlice };
export type { IGlobalState };
