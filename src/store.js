import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    toggleTaskStatus: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) task.description = description;
    },
    filterTasks: (state, action) => {
      return {
        ...state,
        tasks: state.tasks.filter(task => task.isDone === action.payload),
      };
    },
  },
});

export const { addTask, toggleTaskStatus, editTask, filterTasks } = tasksSlice.actions;
export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});
