import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "hello world",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      console.log("Removed Todo:", state.todos);
    },
    updateTodo: (state, action) => {
      const uptodo = state.todos.filter((todo) => {
        todo.id === action.payload.id;
      });
      if (uptodo) {
        uptodo.text = "yalla";
      }
    },
  },
});
// we export each reducer as these wil be accessed   ye actions ma se value mil jaegi
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;

// reducers ontain properties and fucntioncs

// so first slice is created then we name it then we have made an intial state above we say that this slice has initial state is also that then we add reducers which have are fnction we can acces from our code
// now in actiontodo state is the first intialstate then action will how we access it and pass value and then we access state and push our todo to it
