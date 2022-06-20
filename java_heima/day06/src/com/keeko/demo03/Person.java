package com.keeko.demo03;

/*
问题描述：
    定义Person的年龄时，无法阻止不合理的数值被设置进来。(如-20)
    解决方案：用private关键字将需要保护的成员变量进行修饰。

一旦使用了private进行修饰，那么本类当中仍然可以随意访问。(通过类的方法进行访问)
但是！超出了本类范围之外就不能再直接访问了。

间接访问private成员变量，就是定义一对儿Getter/Setter方法

必须叫setXxx或者是getXxx命名规则。
对于Getter来说，不能有参数，返回值类型和成员变量对应；
对于

 */
public class Person {
    String name;
    private int age;

    public void show() {
        System.out.println("name: " + name + ", age: " + age);
    }

    // ↓ 这个成员方法用于给成员变量age设置值
    public void setAge(int a) {
        if (a < 100 && a >= 9) { // 如果是合理情况
            age = a;
        } else {
            System.out.println("数据不合理！");
        }
    }
    // ↓ 这个成员方法，用于获取age的值
    public int getAge() {
        return age;
    }
}
