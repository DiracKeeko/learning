// #高级类型：
// ##映射类型 
/* 
  1.Readonly
  2.Partial
  3.Pick
  // ↑ 同态类型
  ...
  // ↓ 非同态类型
  4.Record
  ...
  
  TS内置了很多映射类型
*/
// 通过映射类型可以从一个既有类型生成一个新的类型
// 比如把一个类型中的所有属性变为只读

interface Obj6 {
  a: string;
  b: number;
  c: boolean;
}

// Readonly -> TS内置的泛型接口

type ReadonlyObj = Readonly<Obj6>;

type PartialObj = Partial<Obj6>;

type PickObj = Pick<Obj6, 'a' | 'b'>
// ↑ 上面的三种类型都是 同态 
// 同态 (只会作用于Obj6属性，而不会引入新的属性)

type RecordObj = Record<'x' | 'y', Obj6>
