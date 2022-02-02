import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

  // 简化语法
  state = {
    txt: "",
    content: "",
    city: "",
    isChecked: false
  };

  handleChange = (e) => {  // ← 注意这里需要通过事件对象来获取新的文本值
    const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [e.target.name]: newValue
    })
  }
  render() {
    return (
      <div>
        <span>文本框</span>
        <input type="text" name="txt" value={this.state.txt} onChange={this.handleChange}></input>
        <br/>
        <span>文本域</span>
        <input type="textarea" name="content" value={this.state.content} onChange={this.handleChange}></input>
        <br/>
        <span>下拉框</span>
        <select value={this.state.city} name="city" onChange={this.handleChange}>
          <option value="sh">上海</option>
          <option value="gz">广州</option>
          <option value="bj">北京</option>
        </select>
        <br/>
        <span>复选框</span>
        <input type="checkbox" name="isChecked" checked={this.state.isChecked} onChange={this.handleChange}></input>
        {/* 注意复选框绑定的值不是value 而是checked */}
      </div>
    );
  }
  /* 
    注意 input type = text / textarea 
         select 
        绑定的都是value

        而 input type = checkbox 
        绑定的是checked属性
  */
}

ReactDOM.render(<App />, document.getElementById("root"));
