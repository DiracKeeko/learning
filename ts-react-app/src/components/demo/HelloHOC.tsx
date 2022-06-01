import React, { Component } from "react";
import HelloClass from "./HelloClass";

interface Loading {
  loading: boolean;
}

function HelloHOC<P>(WrappedComponent: React.ComponentType<P>) {
  return class extends Component<P & Loading> {
    render() {
      const { loading, ...props } = this.props;
      return loading ? (
        <div>loading...</div>
      ) : (
        <WrappedComponent {...props as P}></WrappedComponent>
      );
    }
  };
}

/* 
  高阶组件+TS时会遇到很多类型问题，解决问题通常不顺利，且会存在已知的BUG
  这不是高阶组件的问题，是React声明文件还没有很好的兼容高阶组件的类型检查
  
  更推荐使用Hooks
*/

export default HelloHOC(HelloClass);
