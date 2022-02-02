import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  handleClick(e) {
    e.preventDefault();
    console.log("禁止跳转")
  }
  render() {
    return (
      <a href="http://www.baidu.com" onClick={this.handleClick}>一个a</a>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));
