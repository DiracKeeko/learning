import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

  // 简化语法
  state = {
    txt: "",
    content: "",
    commentArr: [
      {
        userName: "jack",
        userContent: "ma"
      }
    ]
  };

  handleChange = (e) => {  // ← 注意这里需要通过事件对象来获取新的文本值
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [target.name]: value
    })
  }
  handleClick = () => {
    const { commentArr, txt, content } = this.state;
    
    // 非空校验
    if(txt.trim() === "" || content.trim() === "") {
      alert("pleate insert content");
      return
    }
    const newItem = { 
      userName: txt,
      userContent: content
    }
    this.setState({
      commentArr: [...commentArr, newItem],
      txt: "",
      content: ""
    })
    console.log("commentArr->", commentArr);
  }
  renderList() {
    const { commentArr } = this.state;
    return (
      commentArr.length === 0
        ? (<div>暂无评论</div>) 
        : (
            <ul>
              { commentArr.map( (item, index) => {
                return (
                  <li key={index}>
                    <h3>评论人: {item.userName}</h3>
                    <span>评论内容: {item.userContent}</span>
                  </li>
                )
              })}
            </ul>
          )
    )
  }
  render() {
    return (
      <div>
        <span>评论人:</span>
        <input type="text" name="txt" value={this.state.txt} onChange={this.handleChange}></input>
        <br/>
        <span>内容:</span>
        <input type="textarea" name="content" value={this.state.content} onChange={this.handleChange}></input>
        <br/>
        <button onClick={this.handleClick}>发表评论</button>
        <br/>
        { this.renderList() }
        
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById("root"));
