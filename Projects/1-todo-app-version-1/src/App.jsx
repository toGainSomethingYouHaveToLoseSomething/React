import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItem1 from "./component/TodoItem1";
import TodoItem2 from "./component/TodoItem2";
import "./App.css";
function App() {
  return (
    <center class="todo-container">
      <AppName></AppName>
      <div class="container ">
        <div className="items-container">
          <AddTodo></AddTodo>
          <TodoItem1></TodoItem1>
          <TodoItem2></TodoItem2>
        </div>
      </div>
    </center>
  );
}

export default App;
