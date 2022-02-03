import React from "react";
import ReactDOM from "react-dom";

class Parent extends React.Component {
  state = {
    count: 0
  }
  handleIncrement = () => {
    this.setState({count: this.state.count + 1})
  }
  render() {
    return (
      <div className="parent">
        父组件:
        <Child1 count={this.state.count}></Child1>
        <Child2 countFunc={this.handleIncrement}></Child2>
      </div>
    )
  }
}

const Child1 = (props) => {
  return (
    <h1>count: {props.count}</h1>
  )
}

const Child2 = (props) => {
  return (
    <button onClick={props.countFunc}>+1</button>
  )
}

ReactDOM.render(
  <Parent/>,
  document.getElementById("root")
);
