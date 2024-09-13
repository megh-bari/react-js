import React, { useState, useEffect } from "react";
import { useTodo } from "../Context";
import { Check, Edit2, Trash2, Save } from "lucide-react";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { deleteTodo, isCompleted, updateTodo } = useTodo();

  useEffect(() => {
    setTodoMsg(todo.todo);
  }, [todo]);

  const editTodo = () => {
    updateTodo(todo.id, { todo: todoMsg, completed: todo.completed });
    setIsTodoEditable(false);
  };

  const handleCheckboxChange = () => {
    isCompleted(todo.id);
  };

  return (
    <div
      className={`flex items-center border rounded-lg px-4 py-3 gap-x-3 shadow-sm transition-all duration-300 ${
        todo.completed ? "bg-green-100" : "bg-white"
      }`}
    >
      <button
        className={`flex-shrink-0 rounded-full p-1 ${
          todo.completed ? "bg-green-500 text-white" : "border-2 border-gray-300"
        }`}
        onClick={handleCheckboxChange}
      >
        {todo.completed && <Check size={16} />}
      </button>
      <input
        type="text"
        className={`flex-grow bg-transparent outline-none ${
          isTodoEditable ? "border-b-2 border-blue-500" : "border-transparent"
        } ${todo.completed ? "line-through text-gray-500" : "text-gray-700"}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <div className="flex-shrink-0 space-x-2">
        <button
          className={`p-2 rounded-full ${
            todo.completed
              ? "text-gray-400 cursor-not-allowed"
              : isTodoEditable
              ? "text-green-600 hover:bg-green-100"
              : "text-blue-600 hover:bg-blue-100"
          }`}
          onClick={() => {
            if (todo.completed) return;
            if (isTodoEditable) {
              editTodo();
            } else setIsTodoEditable((prev) => !prev);
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? <Save size={18} /> : <Edit2 size={18} />}
        </button>
        <button
          className="p-2 rounded-full text-red-600 hover:bg-red-100"
          onClick={() => deleteTodo(todo.id)}
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;