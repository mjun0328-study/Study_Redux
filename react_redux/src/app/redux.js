import { configureStore, createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
  name: "state",
  initialState: {
    select_id: 0,
    topics: [
      { id: 1, title: "HTML", desc: "HTML is ..." },
      { id: 2, title: "CSS", desc: "CSS is ..." },
    ],
    max_id: 2,
    mode: "read",
  },
  reducers: {
    view: (state, action) => {
      state.select_id = action.payload;
      state.mode = "read";
    },
    change_mode: (state, action) => {
      state.mode = action.payload;
    },
    create: (state, action) => {
      state.topics.push({
        id: state.max_id + 1,
        title: action.payload.title,
        desc: action.payload.desc,
      });
      state.select_id = state.max_id + 1;
      state.max_id++;
      state.mode = "read";
    },
    delete: (state) => {
      const newTopics = [];
      for (let i = 0; i < state.topics.length; i++) {
        const topic = state.topics[i];
        if (topic.id !== state.select_id) {
          newTopics.push(topic);
        }
      }
      state.topics = newTopics;
      state.select_id = 0;
      state.mode = "read";
    },
    update: (state, action) => {
      let i = 0;
      for (; i < state.topics.length; i++) {
        const topic = state.topics[i];
        if (topic.id === state.select_id) break;
      }
      state.topics[i] = {
        id: state.select_id,
        title: action.payload.title,
        desc: action.payload.desc,
      };
      state.mode = "read";
    },
  },
});

export const store = configureStore({
  reducer: {
    state: stateSlice.reducer,
  },
});

export const dispatching = stateSlice.actions;
