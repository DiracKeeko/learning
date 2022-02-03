import React from "react";
import ReactDOM from "react-dom";

class Parent extends React.Component {
  state = {
    recipe: ["rice"]
  }
  render() {
    return (
      <div className="parent">
        父组件:
        <Child lunch={ this.state.recipe }></Child>
      </div>
    )
  }
}

function Child(props) {
  return (
    <div className="child">
      <p>子组件</p>
      {props.lunch}
    </div>
  )
}
ReactDOM.render(
  <Parent/>,
  document.getElementById("root")
);
