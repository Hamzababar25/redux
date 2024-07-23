// "use client";
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeTodo } from "../features/todo/todoSlice";

// function Todo() {
//   const todos = useSelector((state) => state.todos);
//   const dispatch = useDispatch();
//   return (
//     <>
//       <div>Todo</div>
//       <ul>
//         {Array.isArray(todos) &&
//           todos.map((todo) => (
//             <li key={todo.id}>
//               {todo.text}
//               <button onClick={() => dispatch(removeTodo(todo.id))}>x</button>
//             </li>
//           ))}
//       </ul>
//     </>
//   );
// }
// export default Todo;
"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice"; // Adjust the path as necessary

function Todo() {
  const todos = useSelector((state) => state.todos.todos); // Accessing the nested todos array
  const dispatch = useDispatch();

  // Use useEffect to log todos whenever they change
  useEffect(() => {
    console.log("Todos:", todos);
  }, [todos]);

  return (
    <>
      <div>Todo</div>
      <ul>
        {Array.isArray(todos) &&
          todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}

              <button onClick={() => dispatch(removeTodo(todo.id))}>x</button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Todo;
