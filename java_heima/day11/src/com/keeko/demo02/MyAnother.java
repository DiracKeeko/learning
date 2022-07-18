package com.keeko.demo02;

public class MyAnother {
    // 访问同一个包下面的其他类
    // 同一个包（我邻居）

    public void anotherMethod() {
        // num 在 MyClass中 用public修饰的时候anotherMethod可以访问
        // num 在 MyClass中 用protected修饰的时候anotherMethod可以访问
        // num 在 MyClass中 用(default)修饰的时候anotherMethod可以访问
        // num 在 MyClass中 用private修饰的时候 anotherMethod不能访问

        System.out.println(new MyClass().num);
    }

}
