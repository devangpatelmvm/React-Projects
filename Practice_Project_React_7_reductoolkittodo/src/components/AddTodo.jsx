import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const todos = useSelector((state) => state.todos.editingId);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    console.log('todos', todos)
    console.log('editingId', editingId)
    e.preventDefault();
    if (editingId) { 
      // If editingId exists, update the todo
      dispatch(updateTodo({ id: editingId, newText: input }));
      setEditingId(null); // Reset editingId after updating
    } else {
      // If editingId is null, add a new todo
      dispatch(addTodo(input));
    }
    setInput(""); // Clear input field after adding/updating
  };

  

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder={editingId ? "Edit Todo..." : "Add a Todo..."}
        value={editingId ? "Edit Todo..." : input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {editingId ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
