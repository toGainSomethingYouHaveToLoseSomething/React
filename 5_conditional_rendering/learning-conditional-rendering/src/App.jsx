import React from "react";
import "./App.css";

function App() {
  let foodItems = ["dal", "ruti", "vegetable", "salad", "milk", "ghee"];
  // let foodItems = [];

  //way-1;
  // if (foodItems.length === 0) {
  //   return <h3>i'm still hungry</h3>;
  // }

  return (
    <React.Fragment>
      <h1>healty food</h1>

      {/* way-2 */}
      {foodItems.length === 0 ? <h3>i'm still hungry</h3> : null}

      {/* way-3 */}
      {/* {foodItems.length === 0 && <h3>i'm still hungry</h3>} */}
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
