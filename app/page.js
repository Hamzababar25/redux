"use client";
import Image from "next/image";
import Todo from "./components/Todo";
import { Provider } from "react-redux";

import { store } from "./store";
import AddTodo from "./components/AddTodo";
export default function Home() {
  return (
    <Provider store={store}>
      {" "}
      <AddTodo />
      <Todo />
    </Provider>
  );
}
