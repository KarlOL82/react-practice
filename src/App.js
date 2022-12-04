
import './style.css';

export default function App() {
  const todos = [
    {id: 1, text: "Wash dishes", done: false},
    {id: 2, text: "Do laundry", done: false},
    {id: 3, text: "Take shower", done: false},
    
  ]; 
  return (
    <div className="App">
      <h1>Todo list</h1>

      <TodoList todos={todos} />
    </div>
  );
}

function TodoList(props) {
  return (
    <ul>
      {props.todos.map(todo => (
        <li>Todo Item</li>
      ))}
    </ul>
  )
}
