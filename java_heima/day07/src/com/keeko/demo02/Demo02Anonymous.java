package com.keeko.demo02;

import java.util.Scanner;

public class Demo02Anonymous {
    public static void main(String[] args) {
        // 普通用法
        // Scanner sc = new Scanner(System.in);
        // int num = sc.nextInt();

        // 匿名对象的用法
        int num = new Scanner(System.in).nextInt();
        System.out.println("输入的是->" + num);

        methodParams(new Scanner(System.in));

        Scanner sc = returnScanner();
        int num1 = sc.nextInt();
        System.out.println("输入的是：" + num1);
    }

    public static void methodParams(Scanner sc) {
        int num = sc.nextInt();
        System.out.println("方法里输入的是->" + num);
    }

    public static Scanner returnScanner() {
        // Scanner sc = new Scanner(System.in);
        // return sc;
        return new Scanner(System.in);
    }
}
