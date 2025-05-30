import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text, done: false }]);
    setText("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Todo App [Updated]</h1>

      <div className="mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border px-2 py-1"
          placeholder="Add a task"
        />
        <button
          onClick={addTodo}
          className="ml-2 bg-gray-200 px-2 py-1"
        >
          Add
        </button>
      </div>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="mb-2 flex items-center">
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`cursor-pointer ${todo.done ? "line-through" : ""}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="ml-2 text-red-500"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App