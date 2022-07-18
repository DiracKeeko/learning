package com.keeko.demo02.sub;

import com.keeko.demo02.MyClass;

public class Stranger {
    public void methodStrange() {
        // num 在 MyClass中 用public修饰的时候methodStrange可以访问
        // num 在 MyClass中 用protected修饰的时候 methodStrange不能访问
        // num 在 MyClass中 用(default)修饰的时候 methodStrange不能访问
        // num 在 MyClass中 用private修饰的时候 methodStrange不能访问
        System.out.println(new MyClass().num);
    }
}
