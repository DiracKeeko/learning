// 类的实现、类的继承和成员修饰符

class Dog {
  constructor(name: string) {
    this.name = name
  }
  // 默认都是 public，也可以显式地声明
  public name: string = 'dog'
  run () {}
  private pri () {} // 私有成员
  protected pro() {} // 受保护的成员
  readonly legs: number = 4 // 只读属性 只读属性必须初始化
  static food: string = 'bones'
}
// 不论在TS还是JS中, 类成员的属性都是实例属性而非原型属性,
// 类成员的方法都是原型方法
console.log("class->", Dog.prototype) // 没有属性name
let dog = new Dog('wangwang')
console.log("instance->", dog) // 有属性name

// dog.pri(); // private -> 编译报错

console.log("food->", Dog.food);
// console.log(dog.food); // 编译报错 food是静态成员

// TS的实例属性必须有初始值，或者在构造函数中被初始化

// ↓ 类的继承
class Husky extends Dog {
  constructor(name: string, color: string) {
    super(name);
    this.color = color

    this.pro() // 子类可以调用
  }
  color: string
}

console.log("food2->", Husky.food);

// ↓ 类的成员修饰符
/* 
  1.public  默认都是public
  
  2.private 私有成员 
    私有成员只能在类的本身调用，不能被类的实例调用，也不能被子类调用
    (如果给class的constructor 加上private修饰符,这个类既不能被实例化也不能被继承)

  3.protected 受保护成员 可以被子类调用，不能被实例调用
    构造函数也可以用 protected修饰(可以被继承, 不能实例化) -> 基类

  4.readonly 只读
    只读属性也必须初始化 
  
  5.static 静态成员
    静态成员只能通过类名来调用，不能通过 类的实例 调用、
    静态成员可以被继承
*/

// 在构造函数的参数中添加修饰符
//   将参数自动变成了实例的属性 -> 省略在类中的定义
/* 
  class Husky extends Dog {
    constructor(name: string, color: string) {
      super(name);
      this.color = color
    }
    color: string
  }

  class Husky extends Dog {
    //                         ↓ 加上public
    constructor(name: string, public color: string) {
      super(name);
      this.color = color
    }
    // color: string // 加上public后 这行可以省略
  }
*/