package com.keeko.demo03;

public class Demo06ArrayMin {
    public static void main(String[] args) {
        int[] arr = {5, 6, 9, 7, 10, 30};
        System.out.println(arrMin(arr));
    }

    public static int arrMin(int[] arr) {
        int result = arr[0];
        for (int i = 1; i < arr.length; i++) {
            result = Math.min(result, arr[i]);
        }
        return result;
    }
}
