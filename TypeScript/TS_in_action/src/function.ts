// 1、函数定义
function add10(x: number, y: number) {
  return x + y // 返回值 TS类型推断, 可以省略
}

// 2、变量定义函数类型
let add2: (x: number, y: number) => number

// 3、类型别名定义函数类型
type add3 = (x: number, y: number) => number

// 4、接口定义函数类型
interface add4 {
  (x: number, y: number): number
}

// 2、3、4三种方式 只是函数类型的定义，没有具体的实现
// 调用时需要书写函数实例

// TS 形参与实参必须一一对应
// add2(2, 3, 4) // 编译报错

// 可选参数 ( y?: )
function add5(x: number, y?: number) {
  return y ? x + y : x;
}

add5(6)
// 注意：可选参数必须位于必选参数之后


// ##默认值
function add6 (x: number, y = 1, z: number, q = 3) {
  return x + y + z + q
}
console.log("add6->", add6(0, undefined, 3))
// 注意：在必选参数前默认参数是不可以省略的，
// 必须明确传入undefined来获得一个默认值
// (传入undefined占位, y的默认值为1)

// ↑ 以上参数的数量是固定的，如果参数的数量不固定，可以使用剩余参数


// ##剩余参数 (以数组形式存在)
function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur)
}
// console.log("add7->", add7(1)) // 报错
console.log("add7->", add7(1, 2, 3))


// ##函数重载 (同名函数, 参数类型/参数个数不同)
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
// ↑ 声明列表
// ↓ 在最宽泛的版本中，实现这个重载
function add8(...rest: any[]) {
  let first = rest[0]
  if (typeof first === 'string') {
    return rest.join(',')
  }
  if (typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur)
  }
}

console.log("add8 num->", add8(1, 2, 3))
console.log("add8 str->", add8("1", "2", "a"))

/*  
  TS编译器在处理重载的时候，回去查询重载列表，
  并且回从第一个定义开始往下尝试，
  如果第一个定义匹配，就执行第一个，否则继续往下重复操作。

  因此，要把最容易匹配到的定义放在重载列表（声明列表）的第一位
*/