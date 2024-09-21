import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      console.log("new todo>>>",newTodo)
      state.push(newTodo);
    },
    updateTask(state, action) {
      state[action.payload.index] = action.payload.task;
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    
    loadTodos: (state, action) => {
      return action.payload || [];
    },
  },
});
export const { addTodo, updateTask, deleteTodo,loadTodos } = todoSlice.actions;



export default todoSlice.reducer;