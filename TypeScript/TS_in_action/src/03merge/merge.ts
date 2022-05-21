// #声明合并
/* 
  1、接口中的非函数成员，要保证唯一性。
    如果不唯一，那类型必须相同
  2、函数成员，每一个函数成员都会被声明为函数重载
    注意重载的顺序
      接口合并的时候，
      接口内部按照先后顺序从前到后
      接口之间合并，后面的接口会排在前面
*/
interface Am {
    x: number;
    // y: string; // 编译器报错 与下面接口A中的 number冲突
    foo(bar: number): number; // 5
    foo(bar: 'a'): string; // 2
}

interface Am {
    y: number;
    foo(bar: string): string; // 3
    foo(bar: string[]): string[]; // 4
    foo(bar: 'b'): string; // 1
}

let am: Am = {
    x: 1,
    y: 2,
    foo(bar: any) {
        return bar
    }
}

// class C {}
// namespace C {
//     export let state = 1
// }
// console.log(C.state)

// function Lib() {}
// namespace Lib {
//     export let version = '1.0'
// }
// console.log(Lib.version)

// enum Color {
//     Red,
//     Yellow,
//     Blue
// }
// namespace Color {
//     export function mix() {}
// }
// console.log(Color)
