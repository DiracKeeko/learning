// 枚举类型: 枚举的实现原理：反向映射
// 数字枚举
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}
console.log(Role.Developer)
console.log(Role[2])

// 字符串枚举，不可进行反向映射
enum Message {
  Success = '恭喜你，成功了',
  Fail = '抱歉，失败了'
}
console.log(Message)

// 异构枚举
enum Answer {
  N,
  Y = 'Yes'
}

// 枚举成员性质
// Role.Developer = 2 只读，不可修改
// 枚举成员分类
// 分类两类：const member 常量枚举
enum Char {
  a, // 1. 没有初始值
  b = Char.a, // 2. 对已有枚举成员的应用
  c = 1 + 2, // 3. 常量的表达式
  // computed member, 其之后的成员一定要赋予初始值
  d = Math.random(),
  e = '124'.length
}

// 常量枚举：const
const enum Month {
  Jan,
  Feb,
  Mar
}
let month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型
// 在一些场景下，枚举和枚举成员都可以做为一种单独的类型存在
enum E { a, b }  // 场景1：枚举成员没有初始值  可以
enum F { a = 0, b = 1 } // 场景2： 枚举成员都是数字枚举
enum G { a = 'apple', b = 'orange' } // 场景3：枚举成员都是字符串枚举

let e: E = 3 // 这里 e 的类型就是 枚举E ( TS语法 value: Type )
let f: F = 3
// 两种不同类型的枚举不可以比较
// e === f // 始终返回false

let e1: E.a
let e2: E.b
// e1 === e2 // 不同枚举类型，不可以比较 (始终返回false)

let e3: E.a = 1
let e4: E.a = 1
// e3 === e4 // 同种枚举类型，可以比较 返回true

// ↓ 字符串枚举，取值只能是枚举成员
let g1: G = G.b // g1 的取值可以是G.a 也可以是 G.b
let g2: G.a = G.a // g2 的取值只能是G.a
