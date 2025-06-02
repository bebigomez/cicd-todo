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
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex flex-col items-center py-12 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">✨ My Todo App</h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Write your task..."
          />
          <button
            onClick={addTodo}
            className="bg-purple-600 text-white px-4 py-2 rounded-xl shadow hover:bg-purple-700 transition"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {todos.map(todo => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-xl shadow"
            >
              <span
                onClick={() => toggleTodo(todo.id)}
                className={`flex-1 cursor-pointer text-gray-800 ${
                  todo.done ? "line-through text-gray-400" : ""
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="ml-4 text-red-500 hover:text-red-700 transition"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App