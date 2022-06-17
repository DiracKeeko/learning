package com.keeko.demo02;

public class Demo03ArraySame {

    public static void main(String[] args) {
        int[] arrA = new int[3];
        arrA[1] = 77;
        System.out.println(arrA[1]); // 77

        int[] arrB = arrA;
        arrB[1] = 88;
        System.out.println(arrA[1]); // 88
    }

}
