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

import cricle = Shape.cricle
console.log(cricle(2))

// tsc b.ts  -> a.js + b.js
// index.html中  src引入 a.js 以及 b.js (.js是编译后的产物)