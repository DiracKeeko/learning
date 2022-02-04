import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    count: 0
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
    console.log("count->", this.state.count); // 0，因为setState是一个异步操作
    
    this.setState({
      count: this.state.count + 1
      // 第二次setState时this.state.count还是0
      // 使用这种语法时，第二个setState不要依赖前面的setState结果
    })
    console.log("count->", this.state.count); // 0 


    // 推荐使用 this.setState((state [, props]) => {}) 语法
    // state形参表示最新的state, props形参表示最新的props。
    this.setState((state) => {
      console.log("count->", state.count); // 1  因为这里的state是上面被+1之后的结果
      return {
        count: state.count + 1
      }
    })

    this.setState((state) => {
      console.log("count->", state.count); // 2  这里的state是上面再次被+1之后的结果
      return {
        count: state.count + 1
      }
    })
  }

  render() {
    console.log("render"); // 多次调用setState，只触发一次render
    return (
      <div>
        <h1>计数: {this.state.count}</h1> 
        <button onClick={this.handleClick}>+1</button>
      </div>
    );
  }
}



ReactDOM.render(<App></App>, document.getElementById("root"));
