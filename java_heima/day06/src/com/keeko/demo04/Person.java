package com.keeko.demo04;

/*
* 如果需要访问本类当中的成员变量，需要使用格式：
    this.成员变量名

  “通过谁调用的方法，谁就是this。”
* */

public class Person {
    String name; // ← 成员变量name

    //                  参数name  ↓
    public void sayHello(String name) {
        // ↓ 当方法的局部变量(参数name) 与 成员变量重名时, 优先使用局部变量
        System.out.println(name + ", 你好, 我是" + name);

        // 加上this 指向成员变量                    ↓
        System.out.println(name + ", 你好, 我是" + this.name);

        // ↑ this 一定是写在成员方法的内部

        System.out.println("成员方法内部，打印this地址值: " + this); // 在方法内部打印this的地址值
    }

    public void sayHi(String who) {
        // ↓ 成员变量name和参数who不重名的时候，不需要加this也能区分
        System.out.println(who + ", 你好, 我是" + name);
    }
}
