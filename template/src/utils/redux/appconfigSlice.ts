import { createSlice } from "@reduxjs/toolkit";
import { changeTitle } from 'utils/utils';

interface IAppconfig {
  currentPage: number;
}

interface IPageDataAction {
  type: string,
  payload: {
    key: number;
    title: string;
  }
}

const defaultAppconfigState: IAppconfig = {
  currentPage: 0,
};

const appconfigSlice = createSlice({
  name: "appconfig",
  initialState: defaultAppconfigState,
  reducers: {
    updatePage: (state: IAppconfig, action: IPageDataAction): IAppconfig => {
      changeTitle(action.payload.title);
      return {
        ...state,
        currentPage: action.payload.key,
      };
    },
  },
});

export { appconfigSlice, defaultAppconfigState };

export type { IAppconfig };

