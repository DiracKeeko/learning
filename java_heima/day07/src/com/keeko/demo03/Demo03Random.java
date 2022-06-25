package com.keeko.demo03;

/*
题目要求：
根据int变量n的值，来获取随机数字，范围是[3, n]，可以取到3也可以取到n。
循环打印10次随机数

思路：
1. 定义一个int变量n，随意赋值
2. 要使用Random：三个步骤，导包、创建、使用
3. 按照规律控制范围，生成随机数。
4. 打印随机数字

规律：
    [a, b]范围  random 的值 取 b + 1 - a; 最后再整体+a
 */

import java.util.Random;

public class Demo03Random {
    public static void main(String[] args) {
        Random r = new Random();
        int n = 7;
        for (int i = 0; i < 10; i++) {
            int num = r.nextInt(n + 1 - 3) + 3;
            System.out.println("random num " + num);
        }
    }
}
