import AddTodo from "./components/AddTodo";
import { Todos } from "./components/Todos"; 

function App() {
  return (
    <>
      <h1 className="text-center text-2xl m-4">Redux-Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
