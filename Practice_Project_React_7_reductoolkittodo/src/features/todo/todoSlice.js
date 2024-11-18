import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);
      console.log("id Check:", !!state.todos.find((todo) => todo.id === id));
      console.log("id:", id);
      console.log("todoToUpdate:", todoToUpdate);
      console.log("newText:", newText);
      if (todoToUpdate !== undefined) {
        todoToUpdate.text = newText;
        console.log("todoToUpdate.text :", todoToUpdate.text );
        // state.todos.push(newText);
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
