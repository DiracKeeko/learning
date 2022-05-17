// #高级类型：
// ##索引类型
let obj5 = {
  a: 1,
  b: 2,
  c: 3
}

function getValues(obj: any, keys: string[]) {
  return keys.map(key => obj[key]);
}
console.log(getValues(obj5, ['a', 'b']));

// ↓ 没有'e' 'f'属性，应该有提示，但正常输出[undefined, undefined]
console.log(getValues(obj5, ['e', 'f']));
// 利用TS对此进行约束

// 索引类型
// 索引类型的查询操作符 keyof T
// keyof T 表示类型T的所有公共属性的字面量的联合类型

interface Obj {
  a: number;
  b: string;
}
let key: keyof Obj;

// 索引访问操作符 T[K]
// T[K] 对象T的属性K代表的类型
let value: Obj['a']

// 泛型约束
// T extends U
// T 通过继承 U 获得某些属性

function getValues1<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key]);
}

console.log(getValues1(obj5, ['a', 'b']));
// console.log(getValues1(obj5, ['e', 'f'])); // 报错