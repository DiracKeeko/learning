let c1 = require('./a.node')
let c2 = require('./b.node')

let c3 = require('../es6/a')
// ↑ ES6的顶级导出(export default)在以cjs的require方式引入时
// 会变为default属性 (-> c3.default )

import c4 = require('../es6/d')  // 方式1
// 上下两行导入的方式等价
// import c4 from '../es6/d' // 方式2

// ↑ 注意
/* 
  如果tsconfig.json中的 esModuleInterop: true;
  那么允许方式1、方式2两种导入

  如果esModuleInterop: false; 那么只允许方式1导入
*/

console.log(c1)
console.log(c2)

// c3() // 报错
// console.log(c3) 
c3.default()
// ↑ 通过c3.default来调用很容易发生错误

// 要处理两种模块之间的不兼容性问题，有两个方案
/* 
  1.不要混用
  2.在ES6模块中使用"export =" 语法 (见 es6/d.ts文件)
    (-> 编译为module.exports)
    导入时也要使用特殊的语法 import c4 = require('../es6/d')
*/

c4()
