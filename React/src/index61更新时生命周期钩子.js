import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hooks constructor");
    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
    // this.forceUpdate();
  }

  render() {
    // 1、new props 2、setState() 3、forceUpdate() 都会触发render()
    console.log("hooks render");
    return (
      <div>
        <Count count={this.state.count}></Count>
        <button onClick={this.handleClick}>打豆豆</button>
      </div>
    )
  }
  componentDidMount() {
    // 适合做事：1、发送网络请求 2、dom操作（在componentDidMount之前dom没有渲染）
    console.log("hooks componentDidMount");
  }
}


class Count extends React.Component {
  render() {
    return (
      <p id="title">打豆豆次数: {this.props.count}</p>
    )
  }
  componentDidUpdate(prevProps) {
    // 适合做事：1、发送网络请求 2、dom操作
    console.log("hooks componentDidUpdate");

    // const title = document.getElementById("title");
    // console.log("title.innerHTML->", title.innerHTML);

    // 如果在这里使用setState() 一定要加判断条件，否则会OOM
    // this.setState({}) // 导致oom
    console.log("prevProps->", prevProps, "curProps->", this.props);
    if (prevProps.count !== this.props.count) {
      this.setState({});
    }
  }
}

// 子节点为组件
ReactDOM.render(
  <App>
  </App>,
  document.getElementById("root")
);
