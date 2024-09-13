import React, { useState } from "react";
import { useTodo } from "../Context";
import PlusCircleIcon from "./PlusCircleIcon";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, isCompleted: false });
    setTodo("");
  };
  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="flex-grow px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-s-lg focus:outline-none  focus:border-transparent transition duration-150 ease-in-out"
      />
      <button
  type="submit"
  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-r-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-offset-2 transition duration-150 ease-in-out"
>
  <PlusCircleIcon className="w-5 h-5 mr-2" />
  Add
</button>

    </form>
  );
}

export default TodoForm;
