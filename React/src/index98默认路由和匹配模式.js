import React from "react";
import ReactDOM from "react-dom";

// 默认路由 
// <Route path="/" element={<Home/>}></Route>  path="/" 就是默认路由

// 匹配模式
// react-router-dom v6 默认就是严格模式了

// v6文档 https://reactrouter.com/docs/en/v6/getting-started/overview
// 《react-router v6 使用》 ↓ 
// https://juejin.cn/post/7033294644901478413

import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";

const Home = () => (
  <h1>home</h1>
)

const First = () => (
  <p>first</p>
)

const Second = () => (
  <p>second</p>
)

const Login = () => {
  const navigate = useNavigate();
  return (
    <p>
      <button onClick={ () => { navigate("/first")} }>toFirst</button>
      {/* <button onClick={ async () => { await navigate("/first")} }>toFirst</button> */}
      <button onClick={ () => { navigate(-1)} }>go back</button>
    </p>
  )
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          App
          <p>
            <Link to="/login">toLogin</Link>
          </p>
          <p>
            <Link to="/first">toFirst</Link>
          </p>
          <p>
            <Link to="/second">toSecond</Link>
          </p>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/first" element={<First/>}></Route>
            <Route path="/second" element={<Second/>}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}



ReactDOM.render(<App></App>, document.getElementById("root"));

