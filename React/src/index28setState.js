import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     count: 0
  //   }
  // }

  // 简化语法
  state = {
    count: 0
  }
  render() {
    return (
      <div>
        <h1>计数: {this.state.count}</h1>
        <button onClick={() => 
          this.setState({count: this.state.count + 1})
        }>+1</button>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));
