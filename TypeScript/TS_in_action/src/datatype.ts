// 原始类型
let bool: boolean = true
let num: number | undefined | null = 123 // 使用联合类型
let str: string = 'abc'
// str = num

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]
//        ↑ 这个Array 是ts预定义的泛型接口
// 上面两种声明等价

// let arr2: Array<number | string> = [1, 2, 3, 'string']
//                 ↑ number | string 联合类型
//  表示数组的成员可以是number 也可以是 string 

// 元组：是一种特殊的数组，限定了数组元素的类型和个数
let tuple: [number, string] = [1, 'string']
// tuple.push('1')  // 可以通过push方法给元组添加新item, 开发中不建议这样使用
// console.log(tuple) // [1, 'string', '1']
// tuple[2] // 编译报错, 不能越界访问

// 函数
// let add = (x: number, y: number) => x + y
// ↓ 添加返回值类型number，通常返回值的类型可以省略
let add = (x: number, y: number): number => x + y
let compute: (x: number, y: number) => number
compute = (a, b) => a + b

// 对象类型
// let obj1: object = {x: 1, y: 2} // 这种情况下如果obj1.x = 3 编译报错
let obj: {x: number, y: number} = {x: 1, y: 2}
obj.x = 2

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
// console.log(s1 === s2) // false

// undefined, null
let un: undefined = undefined // 当注解为 undefined 时，只能赋值 undefined
let nu: null = null // null同undefined

// 思考：其他类型可以赋值 undefined 和 null 吗？
// 在TS的官方文档中，undefined和null是任何类型的子类型。
// 回答：可以，undefined 和 null 为其他类型的子类型，需要配置 ts.config.json -> strictNullChecks(false)
num = null
num = undefined

// void
// 在TS中, void是一种操作符，可以让任何表达式返回 undefined，函数没有任何返回就是 undefined
let noReturn = () => {}
// ↑ 这个函数没有任何返回值，它的返回值类型就是void

// any，可以任意赋值
let x
x = 1
x = 'string'

// never，表示永远不会有返回值的类型: 抛异常；死循环
let error = () => {
  throw new Error('error')
}

let endless = () => {
  while (true) {}
}

