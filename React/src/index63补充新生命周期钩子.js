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
  state = { num: 0 }
  render() {
    return (
      <p id="title">打豆豆次数: {this.props.count}</p>
    )
  }

  // 新的钩子函数 
  // 它是一个静态函数 加static
  // 在组件更新的时候动态的修改state的值
  static getDerivedStateFromProps(props, state) {
    console.log("hooks getDerivedStateFromProps");
    // console.log("props->", props, "state->", state);
    // return null;
    return state;

    // getDerivedStateFromProps必须要有一个返回值，如果没有会报错
    // A valid state object (or null) must be returned. You have returned undefined.
  }

  // 新的钩子函数
  // getSnapshotBeforeUpdate钩子函数一般和componentDidUpdate配合使用
  // getSnapshotBeforeUpdate钩子函数的返回值会作为componentDidUpdate的第三个参数
  getSnapshotBeforeUpdate() {
    console.log("hooks getSnapshotBeforeUpdate");
    return "--snapshot--";
  }
    

  componentDidUpdate(prevProps, prevState, snapshot) {
    // 适合做事：1、发送网络请求 2、dom操作
    console.log("hooks componentDidUpdate");

    // const title = document.getElementById("title");
    // console.log("title.innerHTML->", title.innerHTML);

    // 如果在这里使用setState() 一定要加判断条件，否则会OOM
    // this.setState({}) // 导致oom
    // console.log("prevProps->", prevProps, "curProps->", this.props);
    // console.log("prevState->", prevState, "curState->", this.state);
    console.log("snapshot->", snapshot);

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
