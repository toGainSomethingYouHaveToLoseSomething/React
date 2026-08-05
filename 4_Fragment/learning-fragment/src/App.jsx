import React from "react";
import "./App.css";

function App() {
  let foodItems = ["dal", "ruti", "vegetable", "salad", "milk", "ghee"];

  return (
    <React.Fragment>
      <h1>healty food</h1>
      <ul class="list-group">
        {foodItems.map((item) => {
          return (
            <li class="list-group-item" key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default App;
