import {
  createSlice,
  configureStore
} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      const value =  action.payload.value ?? 1;
      state += value;
      return state;
    },
    decrement : (state, action) => {
      const value =  action.payload.value ?? 1;
      state -= value;
      return state;
    },
    reset: state => 0,
  }
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export {
  store,
  counterSlice,
};
