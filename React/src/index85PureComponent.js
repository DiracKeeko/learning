import React from "react";
import ReactDOM from "react-dom";

// 纯组件 PureComponent 
// PureComponent内部自动实现了shouldComponentUpdate钩子
// 对比了前后两次的props和state的值

/* 
  注意：
    1、纯组件内部对props和state的对比是shallow compare
        即基本数据类型的变更比较没有问题; 引用数据类型的变更要注意变更内存地址。
      
      变更对象时
      const newObj = { ...state.obj, count: 2}
      this.setState({obj: newObj});

      变更数组时，避免push，unshift
      this.setState({
        arr: [...this.state.arr, newItem]
      })
      

*/

class Count extends React.PureComponent {
  // render执行，仅生成虚拟dom。
  // 之后还要经过diff，dom创建，才会完成视图变更。
  render() {
    console.log("render");
    return (
      <h1>计数: {this.props.count}</h1> 
    )
  }
}

class App extends React.Component {
  state = {
    count: 0
  }
  handleClick = () => {
    this.setState(() => {
      return {
        count: Math.floor(Math.random() * 3)
      }
    })
  }


  render() {
    return (
      <div>
        <Count count={this.state.count}></Count>
        <button onClick={this.handleClick}>生成1,2,3</button>
      </div>
    );
  }
}



ReactDOM.render(<App></App>, document.getElementById("root"));

