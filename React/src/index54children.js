import React from "react";
import ReactDOM from "react-dom";

// children属性
// 这两个<App></App>标签中间的所有内容，就是children属性的值
// 如<App>ccc</App>; this.props.children = "ccc";

/* 
  1、当组件标签有子节点时，props就自动生成一个名为"children"的key，
    这个key对应的value就是标签的子节点内容。
  2、children属性和普通的props一样，值可以是文本，dom标签，React组件，函数。
*/

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>组件标签的子节点</h1>
        {this.props.children || "--"}
      </div>
    )
  }
}

const Child = () => {
  return (
    <p>子组件</p>
  )
}
// 子节点为文本节点
// ReactDOM.render(
//   <App>ccc</App>,
//   document.getElementById("root")
// );

// 子节点为标签节点
// ReactDOM.render(
//   <App>
//     <p>p标签节点</p>
//   </App>,
//   document.getElementById("root")
// );

// 子节点为组件
ReactDOM.render(
  <App>
    <Child></Child>
  </App>,
  document.getElementById("root")
);
