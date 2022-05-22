// ##编写声明文件
// 在使用非TS编写的类库时，必须为类库编写声明文件。对外暴露API

import $ from "jquery"; // jquery用js编写，直接引用会报错
// 安装依赖 npm i @types/jquery -D // 安装完成之后，不报错了

$('.app').css('color', 'red');

/* 
  在TS项目中引用外部类库，需要查询是否有声明文件
  microsoft.github.io/TypeSearch
  https://www.typescriptlang.org/dt/search?search=

  如果没有声明文件，那么需要自己编写（可以给社区贡献）

*/

/* 
  三种类库的声明文件的写法 
  1.global
  2.module
  3.umd
*/

// 使用declare关键字为外部变量提供类型声明

// 在index.html中用src引入
// globalLib({x: 1})
// globalLib.doSomething()


import moduleLib from './module-lib'
moduleLib({y: 2})
moduleLib.doSomething()

import umdLib from './umd-lib'
umdLib.doSomething() 
// umd类库也可以在全局中引用 -> src标签
// allowUmdGlobalAccess: true

// 模块插件 给外部类库增加自定义方法
import m from 'moment';
declare module 'moment' {
    export function myFunction(): void;
}
m.myFunction = () => {}

// 全局插件
// declare global {
//   namespace globalLib {
//       function doAnyting(): void
//   }
// }
// globalLib.doAnyting = () => {}