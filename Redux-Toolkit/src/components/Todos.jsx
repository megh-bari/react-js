import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/Todo/todoSlice";

export function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Todos</h2>
      <ul className="list-disc pl-5">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center mb-2">
            <span className="text-lg">{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
