/* 
  类型兼容性

  当一个类型Y可以被赋值给另一个类型X时，我们就说类型X兼容类型Y

  X兼容Y: X(目标类型) = Y(源类型)

*/

let s: string = 'a';
// s = null; 
// ↑ 在关闭strictNullChecks时, 编译器不报错
// ↑ 字符串类型兼容null类型 (也可以说 null类型是字符串类型的子类型)


// ##接口兼容性
interface X {
  a: any;
  b: any;
}
interface Y {
  a: any;
  b: any;
  c: any;
}
let x1: X = { a: 1, b: 2 }
let y1: Y = { a: 1, b: 2, c: 3 }
x1 = y1; // y1可以赋值给x1 -> X类型兼容Y类型
// y1 = x1; // x1不能赋值给y1


// ##函数兼容性
type Handler = (a: number, b: number) => void
function hof(handler: Handler) {
  return handler
}
// ↑ 给高阶函数传入参数时，编译器就会判断Handler和参数是否兼容
// Hander->目标类型, 参数->源类型

/* 
  如果要目标函数 兼容 源函数，需要同时满足三个条件
  1.参数个数
    - 参数数量固定
      目标函数的参数个数 >= 源函数的参数个数
    - 有可选参数和剩余参数
      a.固定参数可以兼容可选参数
      b.可选参数不兼容固定参数。可选参数不兼容剩余参数
      c.剩余参数可以兼容固定参数和可选参数

  2.参数类型
    - 参数类型必须匹配
      a.基础类型容易判断
      b.对象类型复杂 
        - 成员个数多的能兼容成员个数少的（想象成参数，参数多的兼容参数少的）

  3.返回值类型
    - 目标函数的返回值类型必须与源函数的返回值类型相同或者为源函数的子类型
    
    如果有函数重载
*/
 
// 1.参数个数
// -参数数量固定
let handler1 = (a: number) => {}
hof(handler1)

let handler2 = (a: number, b: number, c: number) => {}
// hof(handler2); // 报错 源函数3个参数，目标函数2个参数，不能兼容

// -可选参数和剩余参数
// ↓ a.固定参数可以兼容可选参数
let a1 = (p1: number, p2: number) => {}
let b1 = (p1?: number, p2?: number) => {}
let c1 = (...args: number[]) => {}
a1 = b1 // 可以兼容
a1 = c1 // 可以兼容

// ↓ b.可选参数不兼容固定参数。可选参数不兼容剩余参数
// b1 = a1;
// b1 = c1;
// ↑ strictFunctionTypes开启时, 编译检查报错
// strictFunctionTypes: false 可以通过编译检查

// ↓ c.剩余参数可以兼容固定参数和可选参数
c1 = a1
c1 = b1


// 2.参数类型
let handler3 = (a: string) => {}
// hof(handler3) // 报错 a和a类型不兼容

interface Point3D {
  x: number;
  y: number;
  z: number;
}
interface Point2D {
  x: number;
  y: number;
}
let p3d = (point: Point3D) => {}
let p2d = (point: Point2D) => {}
p3d = p2d // p3d兼容p2d
// p2d = p3d // p2d不兼容p3d 
// ↑ 如果strictFunctionTypes: false 可以通过编译检查


// 3.返回值类型
let f11 = () => ({name: 'Alice'});
let g11 = () => ({name: 'Alice', location: 'Nanjing'});
f11 = g11;
// g11 = f11; // 报错
// f11的返回值类型是g11返回值类型的子类型


// ##函数重载的情况
/* 
  1.目标函数的参数要多于源函数的参数
  2.返回值类型要符合定义的要求
*/
function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
// ↑上面是定义 （目标函数）
// ↓下面是具体实现 （源函数）
function overload(a: any, b: any): any {};
// function overload(a: any, b: any, c: any): any {}; //报错，参数不兼容
// function overload(a: any, b: any) {}; // 报错，不兼容 -> 返回值类型不兼容


// 枚举兼容性
enum Fruit { Apple, Banana };
enum Color { Red, Yellow };

let fruit: Fruit.Apple = 3
let num1: number = Fruit.Apple;
// ↑ 枚举类型和数值类型可以互相兼容
// ↓ 不同的枚举类型 不兼容
// let color: Color.Red = Fruit.Apple; // 不兼容

// 类兼容性
class A {
  constructor(p: number, q: number) {}
  id: number = 1
  // private name: string = ""
}
class B {
  static s = 1
  constructor(p: number) {}
  id: number = 2
}
let aa = new A(1, 2);
let bb = new B(1);
aa = bb;
bb = aa; // 兼容 -> 都具有实例属性id
/* 
  1.类之间的兼容性判断时，静态属性和构造函数不参与判断
  2.如果两个类具有相同的实例成员(class的属性)，那么他们的实例(aa, bb)就可以完全兼容
  3.如果类中有私有成员，那么两个不同的类之间不兼容 (若有私有成员，只有父类和子类可以兼容)
*/

class AA {
  constructor(p: number, q: number) {}
  id: number = 11
  private name: string = ""
}
class BB {
  static s = 1
  constructor(p: number) {}
  id: number = 22
  private name: string = ""
}
let aaa = new AA(1, 2);
let bbb = new BB(1);
// aaa = bbb; // 不兼容
// bbb = aaa; // 不兼容

class CC extends AA {}
let ccc = new CC(1, 2);
aaa = ccc;
ccc = aaa;


// 泛型的兼容性
interface Empty<T> {
}
let obj1: Empty<number> = {};
let obj2: Empty<number> = {};
obj1 = obj2
// ↑ 上面的情况兼容

// ↓ 下面的情况不兼容
/* 
  interface Empty<T> {
    value: T // 使用了泛型T
  }
  let obj1: Empty<number> = {};
  let obj2: Empty<number> = {};
  obj1 = obj2
*/
// 只有类型参数T被接口成员使用的时候，才会影响泛型的兼容性

let log1 = <T>(x: T): T => {
  console.log('x');
  return x;
}
let log2 = <U>(y: U): U => {
  console.log('y');
  return y;
}
log1 = log2;
// 如果两个泛型函数的定义相同，但没有指定类型参数，它们是可以相互兼容的。