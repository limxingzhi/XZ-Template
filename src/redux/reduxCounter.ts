import {
  createSlice,
  configureStore
} from '@reduxjs/toolkit';

interface appState {
  count: number
};

const defaultState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: defaultState,
  reducers: {
    increment: (state: appState, action) => {
      state.count += action.payload.value ?? 0;
      return state;
    },
    reset: (state: appState) => {
      state.count = 0;
      return state;
    },
  }
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export {
  store,
  counterSlice,
  defaultState,
};

export type {
  appState,
}
