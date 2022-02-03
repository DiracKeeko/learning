import React from "react";
import ReactDOM from "react-dom";

// ↓ 函数组件
// const App = (props) => {
//   console.log("props->", props);
//   return (
//     <div>
//       <h1>props.gender: {props.gender} </h1>
//     </div>
//   )
// }

// ↓ 类组件
class App extends React.Component {
  render() {
    // console.log("props->", this.props); // 类组件中要用this.props
    const { props } = this;
    return (
      <div>
        <h1>props.name: {props.name}</h1>
        <h1>props.age: {props.age}</h1>
      </div>
    )
  }
}

ReactDOM.render(<App name="Tom" gender="male" age={5}/>, document.getElementById("root"));
