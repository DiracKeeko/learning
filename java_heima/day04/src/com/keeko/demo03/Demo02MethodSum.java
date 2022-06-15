package com.keeko.demo03;

/*
题目要求：
定义一个方法，用来求出1-100之间所有数字的和值。
 */
public class Demo02MethodSum {
    public static void main(String[] args) {
        System.out.println(getSum());
    }

    public static int getSum() {
        int acc = 0;
        for (int i = 1; i <= 100; i++) {
            acc += i;
        }
        return acc;
    }
}
