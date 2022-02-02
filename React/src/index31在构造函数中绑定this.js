import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   count: 0
    // }
    this.handleClick = this.handleClick.bind(this);
  }

  // 简化语法
  state = {
    count: 0,
  };
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <h1>计数: {this.state.count}</h1>
        <button onClick={ this.handleClick }>+1</button>
      </div>
    );
  }
  /* 
    解决this的指向问题
    1、利用箭头函数自身没有this的特点(自身不绑定this)
      onClick={() => this.handleClick() }
    2、在constructor中先super()初始化this,再用bind绑定this
      this.handleClick = this.handleClick.bind(this);
  */
}

ReactDOM.render(<App />, document.getElementById("root"));
