"use client";
import Image from "next/image";
import Todo from "./components/Todo";
import { Provider } from "react-redux";

import { store } from "./store";
export default function Home() {
  return (
    <Provider store={store}>
      {" "}
      <Todo />
    </Provider>
  );
}
