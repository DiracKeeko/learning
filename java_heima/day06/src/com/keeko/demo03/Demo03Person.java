package com.keeko.demo03;

public class Demo03Person {
    public static void main(String[] args) {
        Person person = new Person();

        person.name = "zhao";
        // person.age = -20; // 直接访问private内容，错误写法！
        person.setAge(20);
        person.show();
    }
}
