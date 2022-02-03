import React from "react";
import ReactDOM from "react-dom";

// props默认值

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>默认pageSize</h1>
        {this.props.pageSize}
      </div>
    )
  }
}

App.defaultProps = {
  pageSize: 10
}

// 子节点为组件
ReactDOM.render(
  <App pageSize={20}>
  </App>,
  document.getElementById("root")
);
