package com.keeko.demo02;

public class MyClass {

    // public int num = 10; // public
    // protected int num = 10; // protected
    // int num = 10; // default
    private int num = 10;
    // ↑ 同一个类中 被private修饰符 修饰的变量 可以被同类中的其他方法访问
    // private之上的其他修饰符，范围更大，也可以访问

    public void method() {
        System.out.println(num);
    }

}
