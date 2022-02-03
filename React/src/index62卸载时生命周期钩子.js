import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        { 
          this.state.count > 3
           ? (<p>豆豆被打死了</p>)
           : (<Count count={this.state.count}></Count>)
        }
        <button onClick={this.handleClick}>打豆豆</button>
      </div>
    )
  }
}


class Count extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("定时器执行");
    }, 1000)
  }
  render() {
    return (
      <p id="title">打豆豆次数: {this.props.count}</p>
    )
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("hooks componentWillUnmount");
  }
}

// 子节点为组件
ReactDOM.render(
  <App>
  </App>,
  document.getElementById("root")
);
