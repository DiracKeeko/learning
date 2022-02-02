import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

  // 简化语法
  state = {
    txt: "",
  };
  handleClick = () => {
    // console.log("this->", this);
    this.setState({ count: this.state.count + 1 });
  }
  handleChange = (e) => {  // ← 注意这里需要通过事件对象来获取新的文本值
    this.setState({
      txt: e.target.value
    })
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.txt} onChange={this.handleChange}></input>
      </div>
    );
  }
  /* 
    解决this的指向问题
    1、利用箭头函数自身没有this的特点(自身不绑定this)
      onClick={() => this.handleClick() }
    2、在constructor中先super()初始化this,再用bind
      this.handleClick = this.handleClick.bind(this);
    3、实验性语法 bable支持,react脚手架中集成bable
  */
}

ReactDOM.render(<App />, document.getElementById("root"));
