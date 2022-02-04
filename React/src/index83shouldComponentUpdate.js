import React from "react";
import ReactDOM from "react-dom";

/* 
  性能优化:
    1、减轻state，state中只放置与渲染相关的数据，其他数据放在组件的this中
    2、避免不必要的重新渲染 shouldComponentUpdate(nextProps, nextState){} 钩子
      shouldComponentUpdate 返回true 执行render。 返回false 不执行render
*/

class App extends React.Component {
  state = {
    count: 0
  }
  handleClick = () => {
    this.setState(() => {
      return {
        count: Math.floor(Math.random() * 3)
      }
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("nextState->", nextState);
    return this.state.count !== nextState.count;
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>计数: {this.state.count}</h1> 
        <button onClick={this.handleClick}>生成1,2,3</button>
      </div>
    );
  }
}



ReactDOM.render(<App></App>, document.getElementById("root"));

