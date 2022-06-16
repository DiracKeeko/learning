package com.keeko.demo01;

/*
直接打印数组名称，得到的是数组对应的：内存地址哈希值。
二进制：01
十进制：0123456789
16进制：0123456789abcdef

访问数组元素的格式：数组名称[索引值]
索引值：就是一个int数字，代表数组当中元素的编号。
【注意】索引值从0开始，一直到“数组的长度-1”为止。
 */

public class Demo04ArrayUse {
    public static void main(String[] args) {
        int[] arrA = { 10, 20, 30 };
        System.out.println(arrA); // [I@71e7a66b 数组对应的内存地址哈希值

        // 直接打印数组当中的元素
        System.out.println(arrA[0]); // 10
        System.out.println(arrA[1]); // 20
        System.out.println(arrA[2]); // 30
        System.out.println("=============");

        // 也可以将数组当中的某一个单个元素，赋值交给变量
        int num = arrA[1];
        System.out.println(num); // 20
    }
}
