import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component {
  constructor(props) {
    // 1、初始化state 2、绑定this
    super(props);
    console.log("hooks constructor");
  }
  render() {
    // 在render里执行setState()会导致OOM。 禁止在render里使用setState
    console.log("hooks render");
    return (
      <div>...</div>
    )
  }
  componentDidMount() {
    // 1、发送网络请求 2、dom操作（在componentDidMount之前dom没有渲染）
    console.log("hooks componentDidMount");
  }
}



// 子节点为组件
ReactDOM.render(
  <App>
  </App>,
  document.getElementById("root")
);
