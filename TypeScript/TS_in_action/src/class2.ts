// 抽象类与多态
// ES中没有抽象类, TS对ES的扩展
/* 
  抽象类 
    只能被继承，不能被实例化的类

  多态
    在父类中定义方法，在子类中有不同的实现 -> 运行时绑定
*/

// ↓ 抽象类关键字 abstract
abstract class Animal {
  eat () {
    console.log("eat");
  }
  // ↓ 抽象方法，可不指定具体实现，在子类中可以有不同的实现，多态
  abstract sleep (): void
}
// let animal = new Animal(); // 编译报错 无法创建抽象类的实例

class Dog1 extends Animal {
  constructor (name: string) {
    super()
    this.name = name
  }
  name: string
  run () {}
  sleep () {
    console.log('dog sleep')
  }
}

let dog1 = new Dog1('ww')
dog1.eat()

class Cat extends Animal {
  sleep() {
    console.log("cat sleep");
  }
}

let cat = new Cat();

let animals: Animal[] = [dog1, cat]
animals.forEach(i => {
  i.sleep()
})

// this 类型 (返回this 方便链式调用)
class WorkFlow {
  step1() {
    console.log("step1");
    return this
  }

  step2() {
    console.log("step2");
    return this
  }
}

new WorkFlow().step1().step2()

// 在继承时 this也可以表现出多态
  // 这里的多态是指 this 即可以是父类、也可以是子类
class Myflow extends WorkFlow {
  next () {
    console.log("next");
    return this
  }
}

new Myflow().next().step1().next().step2()