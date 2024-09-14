import { useState, useEffect } from "react";
import { TodoProvider } from "./Context";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/TodoItems";
import Footer from "./Components/Footer";

function App() {
  const [todos, setTodos] = useState([]);
  // * Todo Functionality

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, ...updatedTodo } : prevTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const isCompleted = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed } // Ensure you're using 'completed'
          : prevTodo
      )
    );
  };

  //* Local Storage

  useEffect(() => {
    // key name: todos
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, isCompleted }}
    >
      <div className="bg-slate-800 min-h-screen py-3">
        <div className="w-full max-w-2xl mx-auto rounded-lg px-4 py-2 text-white">
          <h1 className="text-3xl font-semibold text-center mb-5">TaskTracker</h1>
         
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      <Footer />
      </div>
    </TodoProvider>
  );
}

export default App;
