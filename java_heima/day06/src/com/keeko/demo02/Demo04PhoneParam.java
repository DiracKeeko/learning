package com.keeko.demo02;

public class Demo04PhoneParam {
    public static void main(String[] args) {
        Phone one = new Phone();
        one.brand = "苹果";
        one.price = 8388.0;
        one.color = "土豪金";

        printInstance(one); // 传递进去的参数其实就是地址值
    }

    public static void printInstance(Phone obj) {
        System.out.println(obj.brand);
        System.out.println(obj.price);
        System.out.println(obj.color);
    }
}
