package com.keeko.demo01;

/*
对于成员变量来说，如果使用final关键字修饰，那么这个变量也照样是不可变。

1. 由于成员变量具有默认值，所以用了final之后必须手动赋值，不会再给默认值了。
2. 对于final的成员变量，要么使用直接赋值，要么通过构造方法赋值。二者选其一。
3. 必须保证类当中所有重载的构造方法，都最终会对final的成员变量进行赋值。
 */
public class Person {

    private final String name/* = "鹿晗"*/;

    public Person() {
        name = "关晓彤";
    }

    public Person(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    // ↓ 需要在构造方法中对name赋值，且不能再改变name的值，因此setter方法失效
    // ↓ (setter方法不应该存在) 直接删除掉
    // public void setName(String name) {
    //    this.name = name;
    // }
}