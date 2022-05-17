// #高级类型：
// ##交叉类型与联合类型
/* 
  1.交叉类型  &
  2.联合类型  |
    - 声明的类型并不确定，可以为多个类型中的一个
*/
interface DogInterface {
  run(): void 
}

interface CatInterface {
  jump(): void
}

// ↓ 交叉类型
let pet: DogInterface & CatInterface = {
  run() {},
  jump() {}
};
// pet是交叉类型，取的是所有类型的并集

// ↓ 联合类型
let a4: number | string = 1;
let a41: number | string = 'a';

// ↓ 字面量联合类型
let b4: 'a' | 'b' | 'c'; // b4只能取'a','b','c'之一
let c4: 1 | 2 | 3;

// ↓ 对象联合类型
class Dogg implements DogInterface {
  run() {}
  eat() {}
}
class Catt implements CatInterface {
  jump() {}
  eat() {}
}

enum Master { Boy, Girl }

function getPet (master: Master) {
  let pet = master === Master.Boy ? new Dogg() : new Catt();
  // ↓ pet被(编译器)推断为Dogg和Catt的联合类型
  pet.eat() // ← 在pet的类型未确定时，只能访问所有类型的共有成员
  // pet.run() // 不能访问
  return pet 
}

// 可区分的联合类型

interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
/* 
type Shape = Square | Rectangle;
function area(s: Shape) {
  // ↓ 通过共有的类型 kind，创建类型保护区块
  switch (s.kind) {
    case 'square': {
      return s.size ** 2
    }
    case 'rectangle': {
      return s.height * s.width;
    }
  }
}
 */
// ↑ 上面的代码如果不升级，没有问题
// 一旦升级，比如新加了一个Circle 接口，并加入联合类型中
// 就有隐患

interface Circle {
  kind: 'circle';
  r: number;
}
type Shape = Square | Rectangle;
function area(s: Shape) {
  // ↓ 通过共有的类型 kind，创建类型保护区块
  switch (s.kind) {
    case 'square': {
      return s.size ** 2
    }
    case 'rectangle': {
      return s.height * s.width;
    }
  }
}


// 用TS来避免上述的问题
// 1.给函数指定明确的返回值
// ↓ 指定函数的返回值类型为number
type Shape1 = Square | Rectangle | Circle;

function area1(s: Shape):number {
// function area1(s: Shape1):number {
  // 指定返回值类型为number后,TS会检查所有的可能分支
  switch (s.kind) {
    case 'square': {
      return s.size ** 2
    }
    case 'rectangle': {
      return s.height * s.width;
    }
  }
}

// 2.使用never
function area2(s: Shape1) {
  // ↓ 通过共有的类型 kind，创建类型保护区块
  switch (s.kind) {
    case 'square': {
      return s.size ** 2
    }
    case 'rectangle': {
      return s.height * s.width;
    }
    case 'circle': { //补上这个分支
      return Math.PI * s.r ** 2;
    }
    default: {
      return ((e: never) => { throw Error(e) })(s)
      // 上面的s报错，因为类型Circle的参数不能赋给类型never的参数
      // 需要再添加一个case分支
    }
  }
}

console.log(area2({kind: 'circle', r: 1})); // undefined
