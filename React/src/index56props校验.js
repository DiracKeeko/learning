import React from "react";
import ReactDOM from "react-dom";

// props校验  （npm i prop-types）
/* 
  
  1、可选类型
    常见类型: array、bool、func、number、object、string
      如 incrementFunc: PropTypes.func
    React元素类型: element (可以是dom标签，也可以是React component)
      如 child: PropTypes.element
  2、必须有值
    isRequired
      如 colorArr: PropTypes.array.isRequired
  3、特定结构对象
    shape({})
      optionalObjectWithShape: PropTypes.shape({
        color: PropTypes.string,
        fontSize: PropTypes.number
      })
*/

import PropTypes from "prop-types";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>组件标签的子节点</h1>
        {this.props.color || "--"}
        {this.props.el || "--"}
      </div>
    )
  }
}

App.propTypes = {
  color: PropTypes.array,
  el: PropTypes.element.isRequired
}

const Child = () => {
  return (
    <p>p标签</p>
  )
}

// 子节点为组件
ReactDOM.render(
  <App color={["255", "255", "0"]} el={<Child/>}>
  </App>,
  document.getElementById("root")
);
