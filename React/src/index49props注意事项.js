import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  /* 
  constructor() {
    super();
    console.log("props in constructor", this.props); // undefined。(只对constructor有限制)
  } 
  */
  constructor(props) {
    super(props);
    console.log("props in constructor", this.props); // 可以获取
  } 

  render() {
    console.log("props->", this.props);
    // 1、props可以传递任意类型的数
    // 2、props是一个只读对象，只能使用，不能修改。
    // 3、在使用类组件中，如果存在构造函数，应该将props传递给super()。
    //    如果不传，则无法在构造函数中获取props。
    const { props } = this;
    return (
      <div>
        <h1>props.name: {props.name}</h1>
        <h1>props.age: {props.age}</h1>
        {props.tag}
      </div>
    );
  }
}

ReactDOM.render(
  <App
    name="Tom"
    gender="male"
    age={5}
    recipe={["fish", "chicken", "water"]}
    talkFunction={ () => { console.log("meow") } }
    tag={ <p>I am Tom</p> }
  />,
  document.getElementById("root")
);
