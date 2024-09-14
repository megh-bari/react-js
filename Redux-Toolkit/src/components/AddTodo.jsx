import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex items-center justify-center mt-8"
    >
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full max-w-md  text-black rounded-l-lg px-4 py-2 outline-none transition duration-150 ease-in-out bg-white/20 placeholder-gray-400 focus:bg-white  focus:ring-opacity-50"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-4 py-2 bg-green-600 text-white hover:bg-green-700 focus:outline-none "
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
