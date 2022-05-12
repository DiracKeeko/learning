// 类与接口的关系 1 2 3
interface Human {
  // 3. ↓ 接口不能约束类的构造函数
  // new (name: string): void // 会报错
  name: string;
  eat(): void;
}

// 类实现接口  
/* 
  1.implements 关键字
  2.类实现接口时，必须实现所有的接口中声明的全部的属性
*/

class Asian implements Human {
  constructor (name: string) {
    this.name = name
  }
  name: string
  eat() {}
  
  // ↓ 1.类可以定义自己的属性
  sleep () {}

  // ↓ 2.接口只能约束类的共有成员
  // private name: string // 会报错

}

// 4.接口可以像类一样相互继承，一个接口可以继承多个接口
interface Man extends Human {
  run (): void
}

interface Child {
  crying (): void
}

// ↓ 继承多个接口用 "," 
interface Boy extends Man, Child {}

let boy: Boy = {
  name: '',
  run () {},
  eat () {},
  crying () {}
}
 
// 接口继承类，相当于接口把类的成员抽象了出来
class Auto {
  state = 1
  // private state2 = 0 // 私有成员也会被抽离
}

// (AutoInterface 接口)只有成员结构，而没有具体的实现
interface AutoInterface extends Auto {

}

// ↓ C 在实现AutoInterface时 只需要声明state
class C implements AutoInterface {
  state = 1
  // 如果Auto类中声明了private 这里也必须实现
}

// Auto子类也可以实现AutoInterface接口
class Bus extends Auto implements AutoInterface {
  
}

// 接口在抽离类成员的时候 
// 会抽离 1.共有成员 2.私有成员 3.受保护成员