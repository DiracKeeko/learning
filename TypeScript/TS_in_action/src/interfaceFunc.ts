// let add1: (x: number, y: number) => number
// ↑ 用变量定义函数类型

// ↓ 用接口定义函数类型
// interface Add {
//   (x: number, y: number): number
// }

// ↑ 用变量定义、用接口定义 两种定义方式等价

// ↓ 用类型别名定义函数类型
// 类型别名
type Add = (x: number, y: number) => number

let add1: Add = (x, y) => x + y

// 混合类型接口
// 既可以定义函数，又可以像对象一样拥有属性和方法
interface Lib {
  (): void,
  version: string, // 属性
  doSomething(): void // 方法
}


/* 
let lib1: Lib = (() => {}) as Lib;
lib1.version = "1.0";
lib1.doSomething = () => {}
 */
// ↑ 这种方法缺陷是单例的, 向全局暴露了一个lib1

function getLib() {
  let lib: Lib = (() => {}) as Lib;
  lib.version = "1.0";
  lib.doSomething = () => {}
  return lib;
}
let lib1 = getLib();
lib1();
lib1.doSomething();

let lib2 = getLib();
