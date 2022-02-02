import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  handleClick() {
    console.log("...111");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>点我</button>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));
