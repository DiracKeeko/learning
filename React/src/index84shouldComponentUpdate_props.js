import React from "react";
import ReactDOM from "react-dom";

class Count extends React.Component {

  shouldComponentUpdate(nextProps) {
    console.log("nextProps->", nextProps);
    return this.props.count !== nextProps.count;
  }
  
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

