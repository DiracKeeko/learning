import React from "react";
import ReactDOM from "react-dom";


/* 
  注意  
    1、react-router-dom v6里已经使用了Routes这种写法
    2、编程式导航不能使用this.props.history.push("/pathname")  history是一个undefined 
    3、withRouter这个key react-router-dom已经没有export出来，不能import
    4、编程式导航用useNavigate来实现
    5、React Hook "useNavigate" cannot be called in a class component. -> useNavigate 不能在类组件中使用，要在函数组件中使用。
    6、navigate() 可以同步，也可以异步使用。
    7、react-router-dom v6中 history.go(-1) 改成了 navigate(-1);
*/

/* 
  In react-router-dom v6 useHistory() is replaced by useNavigate().

  replace history.push('/path') with navigate('/path')
  Change history.replace('/path') with navigate('/path', { replace: true })
  Want to use state in push/navigate do navigate('/path', { state: { name:'Xyz' }})

  https://stackoverflow.com/questions/62861269/attempted-import-error-usehistory-is-not-exported-from-react-router-dom
*/

import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";

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

