import React from "react";
import "./ToDo.css";
import { useState } from "react";
function ToDo() {
  let [todos, settodos] = useState([]);
  let [text, settext] = useState("");
  function clearlist(index) {
    let rslt = todos.filter((dlt) => {
      return dlt !== todos[index];
    });
    settodos(rslt);
    settext((text = ""));
  }
  return (
    <div className="main">
      <div className="container">
        <div className="input-section">
          <i class="fa-solid fa-mug-hot sticker fa-xl"></i>
          <h1 className="txt">Todo App</h1>
          <input
            value={text}
            onChange={(event) => settext(event.target.value)}
            className="check"
            type="text"
            placeholder="Enter task.."
          />
          <button onClick={() => settodos([...todos, text])}> add</button>
        </div>
        {todos.map((values, index) => {
          return (
            <div className="test">
              <ul>
                <li>
                  {values}
                  <i
                    onClick={() => clearlist(index)}
                    class=" fa-sharp fa-solid fa-xmark"
                  ></i>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ToDo;
