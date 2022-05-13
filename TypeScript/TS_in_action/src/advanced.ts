// 类型推断

let a = 1;
let b = [1];
let c = [1, null]; 
// 鼠标放到c上，看c的类型推断 tsconfig.json中
// strictNullChecks开启时c会被推断为 number|null 的联合类型
// strictNullChecks关闭时c会被推断为 number类型

// 参数有多个类型时 -> 最佳通用类型推断

// ↑ 从右到左推断(根据表达式的值，推断左侧表达式的类型)

// ↓ 从左到右推断
window.onkeydown = (event) => {
  console.log(event.altKey);

  // console.log(event.button); 
  // 报错 button不是键盘事件的属性
}
// 根据左侧 onkeydown事件,推断event为KeyboardEvent理性

// 如果TS的类型推断不符合预期，且自己确认自己的类型
// 此时就可以使用类型断言

/* 
  let foo = {};
  foo.bar = 1; //报错 -> 类型“{}”上不存在属性“bar”
*/

interface Foo {
  bar: number
}
let foo = {} as Foo;
foo.bar = 1;

// ↓ 类型断言不能滥用
/* 
  interface Foo {
    bar: number
  }
  let foo = {} as Foo;
  // foo.bar = 1; // 这里不赋值也不会报错
  // 但没有完全按照接口来实现
*/

// 因此，推荐的做法是，在声明时指定类型
let foo1: Foo = {
  bar: 1
}

// 类型断言赋予了代码灵活性，在使用时要避免滥用
// 改造旧代码时常用类型断言
