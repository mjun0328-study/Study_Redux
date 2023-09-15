import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    number: 0,
  },
  reducers: {
    plus: (state) => {
      state.number++;
    },
  },
});

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const { plus } = counterSlice.actions;
