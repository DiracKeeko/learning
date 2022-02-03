import React from "react";
import ReactDOM from "react-dom";

class Parent extends React.Component {
  state = {
    msgToParent: ""
  }
  getChildMsg = (msg) => {
    console.log("get child msg ->", msg);
    this.setState({ msgToParent: msg });
  }
  render() {
    return (
      <div className="parent">
        父组件: {this.state.msgToParent}
        <Child msgFunc={this.getChildMsg}></Child>
      </div>
    )
  }
}

class Child extends React.Component {
  handleClick = () => {
    this.props.msgFunc("一个子组件的msg");
  }
  // handleClick() {
  //   this.props.msgFunc("一个子组件的msg"); // 这种写法会报错，这里的this是undefined
  // }
  render() {
    return (
      <div className="child">
        <p>子组件</p>
        <button onClick={this.handleClick}>按钮</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Parent/>,
  document.getElementById("root")
);
