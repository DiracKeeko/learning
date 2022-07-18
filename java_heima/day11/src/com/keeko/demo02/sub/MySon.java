package com.keeko.demo02.sub;

// ↓ 不是严格的同一个包，也需要导包
import com.keeko.demo02.MyClass;
// 这里sub 是demo02的 子包

public class MySon extends MyClass {
    public void methodSon() {
        // num 在 MyClass中 用public修饰的时候methodSon可以访问
        // num 在 MyClass中 用protected修饰的时候methodSon可以访问
        // num 在 MyClass中 用(default)修饰的时候 methodSon不能访问
        // num 在 MyClass中 用private修饰的时候 methodSon不能访问
        System.out.println(super.num);
    }
}
