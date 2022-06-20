package com.keeko.demo03;

public class StudentPrivate {
    private String name;
    private int age;
    private boolean male;

    public void setName(String n) {
        name = n;
    }

    public String getName() {
        return name;
    }

    public void setAge(int a) {
        age = a;
    }

    public int getAge() {
        return age;
    }

    public void setMale(boolean m) {
        male = m;
    }
    // ↓ boolean的getXxx方法不能用getXxx形式而要用isXxx形式
    public boolean isMale() {
        return male;
    }
}
