interface List {
  readonly id: number; // 只读属性
  name: string;
  // [x: string]: any; // 3、字符串索引签名
    // ↑ 用任意的字符串去索引List,可以得到任意的结果

  age?: number // 可选属性
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach(el => {
    console.log(el.id, el.name)
    if (el.age) {
      console.log(el.age)
    }
  })
}

let resultR = {
  data: [
    {id: 1, name: 'a'},
    {id: 2, name: 'b', age: 11}, // 传入了多余的字段age
  ]
}
// TS采用了鸭式变形法 (符合接口的必要条件，允许)
// 鸭式变形法，一只鸟看起来像鸭子，游起来像鸭子，叫起来像鸭子，那么就可以认定为是鸭子
render(resultR)

// ↓ 如果传入对象字面量, TS会对额外的字段执行类型检查(编译不通过)
// render({
//   data: [
//     {id: 1, name: 'a'},
//     {id: 2, name: 'b'},
//   ]
// })

// 要通过这种检查，有3种方式
/* 
  1、把对象字面量赋值给变量
  2、类型断言 "as" 或者< >  (类型断言之后编译器会绕过类型检查)
      两种断言方式等价，但建议使用as，<>在React中会产生歧义
  3、索引签名 (字符串索引签名)
*/

// 2、类型断言 ↓
// render({
//   data: [
//     {id: 1, name: 'a'},
//     {id: 2, name: 'b', age: 11},
//   ]
// } as Result)

// render(<Result>{
//   data: [
//     {id: 1, name: 'a'},
//     {id: 2, name: 'b', age: 11},
//   ]
// })

// #接口成员的属性
/* 
  1、可选属性
  2、只读属性
*/

// #可索引类型的接口
// 不确定接口属性的个数 -> 可索引类型的接口
/* 
  1、数字索引
  2、字符串索引
*/

// ↓ 数字索引接口
interface StringArray {
  [index: number]: string
}
// ↑ 用任意的数字去索引StringArray 都会得到一个string
// ↑ 相当于声明了一个字符串类型的数组
let charas: StringArray = ['A', 'B']

// ↓ 字符串索引接口
interface Names {
  [x: string]: string,
}
// ↑ 用任意的字符串去索引Names 都会得到一个string

// ↓ 下面这种 是不被允许的
// interface NamesFix2 {
//   [x: string]: string; // ← 注意是 ;
//   y: number;
// }

// 两种索引签名是可以混用的
interface NamesFix1 {
  [x: string]: string, // ← 注意是 ,
  [y: number]: string // 混用
}
// ↑ 需要注意，数字索引签名的返回值一定要是字符串索引签名的子类型（要兼容）
// 因为JS会进行类型转换，将number转化为string

// interface NamesFix3 {
//   [x: string]: string, 
//   [y: number]: number // 返回number, string和number不兼容,会报错
// }

interface NamesFix4 {
  [x: string]: any, 
  [y: number]: number // 返回number, any兼容number, 可以通过
}