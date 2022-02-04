import React from "react";
import ReactDOM from "react-dom";

// class App extends React.Component {
//   render() {
//     return (
//       <h1 className="title">计数: 1</h1> 
//     );
//   }
// }

// const App = () => (
//   <h1 className="title">计数: 1</h1> 
// )

// console.log(App);
// ReactDOM.render(<App />, document.getElementById("root"));
//  ----------------------


// const element = (
//   <h1 className="title">计数: 1</h1> 
// )

const element = React.createElement("h1", {className: "title"}, "计数: 1");

console.log(element);

// 两种element的结果是一样的 -> JSX语法经过编译后的最终产物，和React.createElement的最终产物一致。 
// (都是React元素)
// React元素: 一个描述dom的对象

// 注意： App 和 element 不一样

ReactDOM.render(element, document.getElementById("root"));
