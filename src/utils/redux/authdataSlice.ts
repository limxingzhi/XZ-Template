import { createSlice } from "@reduxjs/toolkit";

interface IAuthdata {
  userAuthenticated: boolean;
}

const defaultAuthdataState: IAuthdata = {
  userAuthenticated: false,
};

const authdataSlice = createSlice({
  name: "authdata",
  initialState: defaultAuthdataState,
  reducers: {
    changeAuthStatus: (state: IAuthdata, action): IAuthdata => {
      return {
        ...state,
        userAuthenticated: action.payload,
      };
    },
  },
});

export { authdataSlice, defaultAuthdataState };

export type { IAuthdata };
