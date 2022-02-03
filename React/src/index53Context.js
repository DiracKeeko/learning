import React from "react";
import ReactDOM from "react-dom";

// Context传参
/* 
  1、引入Provider和Consumer
  2、用Provider包裹顶级元素，在Provider标签上用value属性传值。必须用value属性
  3、在Consumer组件中用回调函数进行操作。
*/

const { Provider, Consumer } = React.createContext();

class App extends React.Component {
  render() {
    return (
      <Provider value="Tom">
        <div className="app">
          <Node></Node>
        </div>
      </Provider>
    )
  }
}

const Node = () => {
  return (
    <div className="node">
      <SubNode></SubNode>
    </div>
  )
}

const SubNode = () => {
  return (
    <div className="sub-node">
      <Child></Child>
    </div>
  )
}

const Child = () => {
  return (
    <div className="child">
      child节点
      <Consumer>
        {data => (<p>name: {data}</p>)}
      </Consumer>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
