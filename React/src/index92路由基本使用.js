import React from "react";
import ReactDOM from "react-dom";

// npm i react-router-dom
/* 
  1. 导入Router, Route, Routes, Link
  2. 用Router包裹根元素, 用Routes包裹所有的Route, Link是路由的入口
*/

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import { HashRouter as Router, Route, Routes, Link } from "react-router-dom"; // hash路由

/* 
  路由执行过程
  1. 点击Link(Link会被编译为a标签，to会被编译为href)，浏览器地址栏的url变更。
  2. React路由监听到地址栏url变化。
  3. React遍历所有Route组件，找到pathname 与Route的path属性匹配的Route。
  4. 展示该Route对应的element。
*/

const First = () => (
  <p>first</p>
)

const Second = () => (
  <p>second</p>
)

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          App
          <p>
            <Link to="/first">toFirst</Link>
          </p>
          <p>
            <Link to="/second">toSecond</Link>
          </p>
          <Routes>
            <Route path="/first" element={<First/>}></Route>
            <Route path="/second" element={<Second/>}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}



ReactDOM.render(<App></App>, document.getElementById("root"));

