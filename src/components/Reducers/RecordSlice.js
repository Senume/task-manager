import { nanoid } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit';


const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [
      { id: 1, text: 'Design a logo for a fictional tech company specializing in renewable energy.', done: false },
      { id: 2, text: 'Write a 500-word article on the impact of artificial intelligence on society.', done: false },
      { id: 3, text: 'Buy Grocieries from the supermart', done: false },
      { id: 4, text: 'Create a function in JavaScript that reverses a string.', done: false },
      { id: 5, text: 'Declutter and organize a specific area of your home or workspace. ', done: true },
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
