import React from "react";
import ReactDOM from "react-dom";

import cat from "./img/cat.png";

function withMouse(WrappedComponent) {
  class Mouse extends React.Component {
    state = {
      x: 0,
      y: 0,
    };
  
    handleMouseMove = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY,
      });
    };
  
    componentDidMount() {
      window.addEventListener("mousemove", this.handleMouseMove);
    }
    
    componentWillUnmount() {
      window.removeEventListener("mousemove", this.handleMouseMove);
    }
  
    render() {
      // 把props也传递给被包裹组件
      return <WrappedComponent {...this.state} {...this.props}></WrappedComponent>;
    }
  }

  // 设置displayName
  Mouse.displayName = `WithMouse${getDisplayName(WrappedComponent)}`

  return Mouse;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

const Position = props => (
  <p>
    鼠标位置{props.x}, {props.y}
  </p>
)

const Cat = props => (
  <img
    src={cat}
    alt="猫"
    style={{
      position: "absolute",
      top: props.y - 64,
      left: props.x - 64,
    }}
  ></img>
)

const MousePosition = withMouse(Position);
const MouseCat = withMouse(Cat);

class App extends React.Component {
  render() {
    return (
      <div>
        高阶组件
        <MousePosition></MousePosition>
        <MouseCat></MouseCat>
      </div>
    );
  }
}





// 子节点为组件
ReactDOM.render(<App></App>, document.getElementById("root"));
