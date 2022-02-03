import React from "react";
import ReactDOM from "react-dom";

import cat from "./img/cat.png";

import PropTypes from "prop-types";

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
    return this.props.children(this.state);
  }
}

Mouse.propTypes = {
  children: PropTypes.func.isRequired
}

class App extends React.Component {
  render() {
    return (
      <div>
        render props模式
        <Mouse>
          {(mouse) => {
            return (
              <p>
                鼠标位置{mouse.x}, {mouse.y}
              </p>
            );
          }}
        </Mouse>

        <Mouse>
          {(mouse) => {
            return (
              <p>
                <img
                  src={cat}
                  alt="猫"
                  style={{
                    position: "absolute",
                    top: mouse.y - 64,
                    left: mouse.x - 64,
                  }}
                ></img>
              </p>
            );
          }}
        </Mouse>
      </div>
    );
  }
}





// 子节点为组件
ReactDOM.render(<App></App>, document.getElementById("root"));
