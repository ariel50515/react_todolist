import "./App.css";
import Todo from "./Todo";
import { TodoProvider } from "./TodoContext";
import TodoFrom from "./TodoFrom";

function App() {
  return (
    <TodoProvider>
      <div>
        <TodoFrom />
        <Todo />
      </div>
    </TodoProvider>
  );
}

export default App;