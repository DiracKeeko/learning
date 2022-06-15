package com.keeko.demo03;

/*
题目要求：
定义一个方法，用来打印指定次数的HelloWorld。
 */
public class Demo03MethodPrint {
    public static void main(String[] args) {
        printNth(3);
    }

    public static void printNth(int n) {
        for(int i = 0; i < n; i++) {
            System.out.println("hello world " + (i + 1));
        }
    }
}
