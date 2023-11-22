import { nanoid } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit';


const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [
      { id: 1, text: 'Task 1', done: false },
      { id: 2, text: 'Task 2', done: false },
      { id: 3, text: 'Task 3', done: false },
      { id: 4, text: 'Task 4', done: false },
      { id: 5, text: 'Task 5', done: true },
      // Add more tasks as needed
    ]
  },
  
  
  reducers: {
    addTask: (state, action) => {
      const text = action.payload;
      state.tasks.push({ id: nanoid(), text, done: false });
    },
    deleteTask: (state, action) => {
      const id = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    toggleDone: (state, action) => {
      const id  = action.payload;
      state.tasks = state.tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task)
    },
    reorderTasks: (state, action) => {
      const Index  = action.payload;

      console.log("Started from: ", Index.dragTask.current);
      console.log("Dropped on: ", Index.dragOverTask.current);

      const Lists = state.tasks
      const Temp = Lists[Index.dragTask.current]


      if (Index.dragOverTask.current > Index.dragTask.current) {
        Lists.splice(Index.dragOverTask.current + 1, 0, Temp)
        Lists.splice(Index.dragTask.current,1)
      } else {
        Lists.splice(Index.dragOverTask.current, 0, Temp)
        Lists.splice(Index.dragTask.current + 1,1)
      }
      


      

    },
  }
});

export const { addTask, deleteTask, toggleDone, reorderTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
