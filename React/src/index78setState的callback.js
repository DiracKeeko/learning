import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    count: 0
  }
  handleClick = () => {
    // this.setState(updater [, callback])
    // this.setState((state, props) => {}, callback)
    // 这里的callback会在状态更新后立即执行

    this.setState(
      (state) => {
        console.log("count->", state.count);
        return {
          count: state.count + 1
        }
      },
      () => {
        console.log("状态更新完成");
        console.log(document.getElementById("title").innerText); // 计数: 2
      }
    )

    this.setState((state) => {
      console.log("count->", state.count);
      return {
        count: state.count + 1
      }
    })

    // 所有的console.log输出顺序是
    /* 

      count-> 0
      count-> 1
      render
      状态更新完成
      计数: 2

      即回调函数callback的执行时间是在render之后，时间上有一些类似于componentDidUpdate周期
    */
  }

  render() {
    console.log("render"); // 多次调用setState，只触发一次render
    return (
      <div>
        <h1 id="title">计数: {this.state.count}</h1> 
        <button onClick={this.handleClick}>+1</button>
      </div>
    );
  }
}



ReactDOM.render(<App></App>, document.getElementById("root"));
