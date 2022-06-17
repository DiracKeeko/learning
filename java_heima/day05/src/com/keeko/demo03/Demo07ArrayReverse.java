package com.keeko.demo03;

public class Demo07ArrayReverse {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 5, 6};
        reverseArr(arr);
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }

    public static int[] reverseArr(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            int j = arr.length - 1 - i;
            if(i < j) {
                int pauseNum = arr[i];
                arr[i] = arr[j];
                arr[j] = pauseNum;
            } else {
                break;
            }
        }
        return arr;
    }

    public static double[] reverseArr(double[] arr) {
        for (int min = 0, max = arr.length - 1; min < max; min++, max--) {
            double temp = arr[min];
            arr[min] = arr[max];
            arr[max] = temp;
        }
        return arr;
    }
}
