package com.keeko.demo03;

public class Demo05ArrayMax {
    public static void main(String[] args) {
        int[] arr = {5, 6, 9, 7, 10, 30};
        System.out.println(arrMax(arr));
    }

    public static int arrMax(int[] arr) {
        int result = arr[0];
        for (int i = 1; i < arr.length; i++) {
            result = result > arr[i] ? result : arr[i];
        }
        return result;
    }
}
