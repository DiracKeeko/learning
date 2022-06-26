package com.keeko.demo04;

public class Person {
    private String name;
    private int age;

    // 上面写完private属性之后  可以通过Alt + insert 创建构造函数

    public Person() {
    }

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
