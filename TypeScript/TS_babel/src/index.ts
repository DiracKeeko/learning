class A {
    a: number = 1
}

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }
let n = { x, y, ...z }

// n = 1
// tsc 的类型检查，需要单独开启一个命令行

/* 
  有四种语法babel无法编译
  1、命名空间
  2、类型断言的写法 <>会报错，要用as
  3、常量枚举
  4、默认导出
*/

// 1
// namespace N {
//     export const n = 1
// }

// 2
// let s = <A>{}
let s = {} as A
s.a = 1

// 3
// const enum E { A, B }

// 4
// export = s
