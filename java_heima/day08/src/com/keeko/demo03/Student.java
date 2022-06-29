package com.keeko.demo03;

public class Student {
    private int id;
    private String name;
    private int age;
    static String room;
    // ↑ static修饰,这个属性属于类。
    // 一个类的实例修改了属性值,所有的类实例的这个属性同时受到影响(static属性归于类)

    private static int idCounter = 0; // 学号计数器，每当new了一个新对象的时候，计数器++

    public Student() {
        this.id = ++idCounter;
    }

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
        this.id = ++idCounter;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
