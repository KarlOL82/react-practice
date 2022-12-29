import React from "react";
import "./style.css";

export default function App() {
  //List of seeded items that wil be rendered on page load
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Add", done: false },
    { id: 2, text: "Commit", done: false },
    { id: 3, text: "Push", done: false },
    { id: 4, text: "Resolve issue", done: false },
    { id: 5, text: "Debug placeholder image issue in Wilco", done: false },
    { id: 6, text: "Render top seller icon in Wilco assignment", done: false},
    { id: 7, text: "debug Wilco React component", done: false },
    { id: 8, text: "Find a new project", done: false}
  ]);
  return (
    <div className="App bg-blue-300">
      <h1 className="text-4xl font-extrabold p-6">Todo list</h1>

      <TodoList setTodos={setTodos} todos={todos} />
      <AddTodo setTodos={setTodos} />
    </div>
  );
}

function TodoList({ todos, setTodos }) {
  function handleToggleTodo(todo) {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id
        ? {
            ...t,
            done: !t.done,
          }
        : t
    );
    setTodos(updatedTodos);
  }
  //Display this text if all items are removed from list
  if (!todos.length) {
    return <p>No todos left!</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li
          onDoubleClick={() => handleToggleTodo(todo)}
          style={{
            textDecoration: todo.done ? "line-through" : "",
          }}
          key={todo.id}
        >
          {todo.text}
          <DeleteTodo todo={todo} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  );
}
// Remove items from the list
function DeleteTodo({ todo, setTodos }) {
  // Event handler for delete function
  function handleDeleteTodo() {
    const confirmed = window.confirm("Are you sure you want to delete this?");
    if (confirmed) {
      setTodos((prevTodos) => {
        return prevTodos.filter((t) => t.id !== todo.id);
      });
    }
  }

  return (
    <span
      className="flex btn btn-red border-solid justify-center text-red-600 font-bold m-left-10 m-3 cursor: cursor-pointer"
      onClick={handleDeleteTodo}
      role="button"
      // style={{
      //   color: "red",
      //   fontWeight: "bold",
      //   marginLeft: 10,
      //   cursor: "pointer",
      // }}
    >
      x
    </span>
  );
}
// Add a new item to the list
function AddTodo({ setTodos }) {
  const inputRef = React.useRef();
  // Event handler for adding items
  function handleAddTodo(event) {
    event.preventDefault();
    const text = event.target.elements.addTodo.value;
    const todo = {
      id: Math.random(),
      text,
      done: false,
    };
    setTodos((prevTodos) => {
      return prevTodos.concat(todo);
    });
    inputRef.current.value = "";
  }

  return (
    // Simple form for adding items to the list
    <form onSubmit={handleAddTodo}>

      <input className="border-solid text-center rounded-md outline p-3 m-3" name="addTodo" placeholder="Add todo" ref={inputRef} />
      <button className="btn btn-blue p-4 rounded-md text-white bg-blue-500 border-solid" type="submit">Submit</button>
    </form>
  );
}
