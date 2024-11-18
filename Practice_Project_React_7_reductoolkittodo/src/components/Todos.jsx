import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
// import { useState } from "react";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  // const [input, setInput] = useState("");
  // const [editingId, setEditingId] = useState(null);


  const editTodo = (todo) => {
    console.log(todo)
    dispatch(updateTodo(todo))
  };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id} // Ensure each todo has a unique key
            className="mt-4 flex justify-between items-center  bg-zinc-800 px-4 py-2 rounded"
          >
            <div className="text-white">{todo.text}</div>
            <button
              onClick={() => editTodo(todo)}
              className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;