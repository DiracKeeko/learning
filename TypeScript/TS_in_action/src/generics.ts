/* 
  // 函数的原始模样
  function log(value: any): any {
    console.log(value)
    return value
  }
*/

// ↓ 改造后，泛型函数
function log<T> (value: T): T {
  console.log(value)
  return value
}
// 改造后，输入内容不需要预先指定，输入类型和返回类型一致

// 调用

// 1.全部显示声明
log<string[]> (['a', 'b'])
log<string> ('a')

// 2.利用TS的类型推断 ( 省略<> ), 推荐
log('b');

// 泛型不仅可以定义函数，也可以定义函数类型
// ↓ 定义了一个Log 类型 (利用 类型别名type)
type Log = <T> (value: T) => T;

let myLog: Log = log; // myLog 的类型是Log

// ##泛型接口 
interface Log1 {
  // 泛型仅约束了一个函数
  <T> (value: T): T 
}

// 泛型接口定义的Log1 和 类型别名定义的Log 是等价的

interface Log2<T> {
  // 泛型 约束了接口中的所有函数
  (value: T): T 
}

// 注意：当泛型变量约束了整个接口之后，实现时必须指定类型
// let myLog2: Log2 = log; // 报错，缺少类型参数
let myLog21: Log2<number> = log;
let myLog22: Log2<number|string> = log;

interface Log3<T = string> {
  // 泛型 的默认值
  (value: T): T 
}
let myLog3: Log3 = log; // 有泛型默认为string，因此不报错
myLog3("1");