package com.keeko.demo03;

/*
题目要求：
定义一个方法，用来判断两个数字是否相同。
 */
public class Demo01MethodSame {
    public static void main(String[] args) {
        System.out.println(isSame(10, 10));
        System.out.println(isSame(10, 20));
    }

    public static boolean isSame(int a, int b) {
        return a == b;
    }
}
