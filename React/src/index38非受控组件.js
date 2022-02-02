import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
    this.txtRef = React.createRef();
  }



  handleClick = () => {
    console.log(this.txtRef.current.value);
    // 注意  current  this.txtRef.current.value
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.txtRef}></input>
        <button onClick={ this.handleClick }>console</button>
      </div>
    );
  }
  
}

ReactDOM.render(<App />, document.getElementById("root"));
