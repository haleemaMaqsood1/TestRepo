import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
export const saveTasks = async (tasks) => {
  try {
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks:', error);
  }
};

export const loadTasks = () => async (dispatch) => {
  try {
    const savedTasks = await AsyncStorage.getItem('tasks');
    if (savedTasks) {
      dispatch(loadTodos(JSON.parse(savedTasks)));
    }
  } catch (error) {
    console.error('Error loading tasks:', error);
  }
};
export const fetchTodos = () => async (dispatch) => {
  try {
    const savedTodos = await AsyncStorage.getItem('todos');
    if (savedTodos) {
      dispatch(loadTodos(JSON.parse(savedTodos))); // Dispatch loadTodos action with loaded todos
    }
  } catch (error) {
    console.error('Error loading todos:', error);
  }
};
export default todoSlice.reducer;