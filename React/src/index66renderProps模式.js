import React from "react";
import ReactDOM from "react-dom";

class Mouse extends React.Component {
  state = {
    x: 0,
    y: 0
  }

  handleMouseMove = e => {
    this.setState({
      x: e.clientX, 
      y: e.clientY
    })
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove)
  }

  render() {
    return this.props.children(this.state);
  }
}

class App extends React.Component {
  
  render() {
    return (
      <div>
        render props模式
        <Mouse>{ (mouse) => { return (<p>鼠标位置{mouse.x}, {mouse.y}</p>) } }</Mouse>
      </div>
    )
  }
}

// 子节点为组件
ReactDOM.render(
  <App>
  </App>,
  document.getElementById("root")
);
