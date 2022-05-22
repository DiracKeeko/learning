// #声明合并
// ## 接口之间的声明合并
/* 
  1、接口中的非函数成员，要保证唯一性。
    如果不唯一，那类型必须相同
  2、函数成员，每一个函数成员都会被声明为函数重载
    注意重载的顺序
      接口合并的时候，
      接口内部按照先后顺序从前到后
      接口之间合并，后面的接口会排在前面(顺序1 2 3)
        如果函数的参数是字符串字面量，
        这个声明就会被提升到整个函数声明的最顶端。(顺序1 2 3 4 5)
*/

/* 
  // 合并后的顺序是 1 2 3
  interface Am {
    foo(bar: number): number; // 3
  }

  interface Am {
    foo(bar: string): string; // 1
    foo(bar: string[]): string[]; // 2
  }
*/

interface Am {
  x: number;
  // y: string; // 编译器报错 与下面接口A中的 number冲突
  foo(bar: number): number; // 5
  foo(bar: "a"): string; // 2
}

interface Am {
  y: number;
  foo(bar: string): string; // 3
  foo(bar: string[]): string[]; // 4
  foo(bar: "b"): string; // 1
}

let am: Am = {
  x: 1,
  y: 2,
  foo(bar: any) {
    return bar;
  },
};

// ## 命名空间之间的声明合并

// ## 命名空间和函数之间的合并
function Lib() {}
namespace Lib {
  export let version = "1.0"; // 相当于给函数增加了属性
}
console.log(Lib.version); // 正常输出 1.0


// ## 命名空间和类之间的合并
class Cm {}
namespace Cm {
  export let state = 1; // 相当于给类添加了静态属性
}
console.log(Cm.state); // 正常输出 1


// ## 命名空间和枚举之间的合并
enum Colorm {
  Red,
  Yellow,
  Blue,
}
namespace Colorm {
  export function mix() {} // 相当于给枚举类型增加了方法
}
console.log(Colorm); // 枚举成员增加了一个mix方法 { ..., mix: function() {} }

// 注意：
// 命名空间和 函数、类 进行声明合并的时候一定要放在后面
// 命名空间和 枚举 顺序没有要求

// 程序中多处重名的声明并不是好的模式
// 多个重名的声明应该放在同一个文件中
// TS保留这种是为了兼容旧的JS代码