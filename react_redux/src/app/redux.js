import { configureStore, createSlice } from "@reduxjs/toolkit";

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: {
//     number: 0,
//   },
//   reducers: {
//     plus: (state) => {
//       state.number++;
//     },
//   },
// });

// export const store = configureStore({
//   reducer: {
//     counter: counterSlice.reducer,
//   },
// });

// export const { plus } = counterSlice.actions;

const stateSlice = createSlice({
  name: "state",
  initialState: {
    select_id: 0,
    topics: [
      { id: 1, title: "HTML", desc: "HTML is ..." },
      { id: 2, title: "CSS", desc: "CSS is ..." },
    ],
    mode: "read",
  },
  reducers: {
    view: (state, action) => {
      state.select_id = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    state: stateSlice.reducer,
  },
});

export const dispatching = stateSlice.actions;
