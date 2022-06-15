package com.keeko.demo04;

/*
题目要求：
比较两个数据是否相等。
参数类型分别为两个byte类型，两个short类型，两个int类型，两个long类型，
并在main方法中进行测试。
 */
public class Demo02MethodOverloadSame {
    public static void main(String[] args) {
        byte a = 10;
        byte b = 20;
        System.out.println(isSame(a, b));

        System.out.println(isSame((short) 20, (short) 20));

        System.out.println(isSame(11, 12));

        System.out.println(isSame(10L, 10L));
    }

    public static boolean isSame(byte a, byte b) {
        return a == b;
    }
    public static boolean isSame(short a, short b) {
        return a == b;
    }
    public static boolean isSame(int a, int b) {
        return a == b;
    }
    public static boolean isSame(long a, long b) {
        return a == b;
    }

}
