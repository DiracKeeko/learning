import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Hello() {
  return (
    <div>这是一个函数组件</div>
  )
}

/* 
function Hello() {
  return null;
}
*/
ReactDOM.render(<Hello/>, document.getElementById("root"));
