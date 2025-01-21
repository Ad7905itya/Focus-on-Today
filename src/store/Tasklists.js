import { createSlice } from "@reduxjs/toolkit";

const initialValue = Array(3).fill({ name: "", completedTask: false });

function getDataLocalStorage() {
  const data = localStorage.getItem("tasks");
  if (data) {
    return JSON.parse(data);
  } else {
    return initialValue;
  }
}

const taskLists = createSlice({
  name: "tasks",
  initialState: getDataLocalStorage(),
  reducers: {
    updateTask: (state, action) => {
      const { inputId, inputValue } = action.payload;
      if (state[inputId].completedTask) {
        state[inputId].name;
      } else {
        state[inputId].name = inputValue;
      }
      return state;
    },
    saveDataLocalStorage: (state, action) => {
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    clearAllTasks: (state) => {
      state.map((item) => {
        item.name = "";
        item.completedTask = false;
      });
      return state
    },
    increaseTasks: (state) => {
      if (state.length < 10) {
        state.push({ name: "", completedTask: false });
      }
    },
    decreaseTasks: (state) => {
      if (state.length > 1) {
        state.pop();
      }
      return state;
    },
    taskCompleted: (state, action) => {
      if (state.every((item) => item !== "")) {
        const { inputId } = action.payload;
        state[inputId].completedTask = !state[inputId].completedTask;
        return state;
      }
    },
  },
});

export const {
  updateTask,
  taskCompleted,
  saveDataLocalStorage,
  increaseTasks,
  decreaseTasks,
  clearAllTasks
} = taskLists.actions;

export default taskLists.reducer;
