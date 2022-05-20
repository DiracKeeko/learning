/// <reference path="a.ts" />
// ↑ 三斜线指令，表示引用
namespace Shape {
    export function square(x: number) {
        return x * x
    }
}

// 命名空间可以拆分
console.log(Shape.cricle(2))
console.log(Shape.square(2))

// 命名空间别名 -> import 
import cricle = Shape.cricle; // 命名空间别名
console.log(cricle(2))

// tsc b.ts  -> a.js + b.js
// index.html中  src引入 a.js 以及 b.js (.js是编译后的产物)

/* 
  命名空间的本质是闭包 （见编译产物 a.js 的实现）
  在ESM模块化规范之后，命名空间基本可以不使用
  TS保留命名空间是对JS的兼容
*/