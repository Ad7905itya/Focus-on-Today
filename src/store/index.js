import { configureStore } from "@reduxjs/toolkit";
import taskLists from "./Tasklists";

export const store = configureStore({
  reducer: {
    taskLists,
  },
});
