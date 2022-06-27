package com.keeko.demo05;

/*
题目：
定义以指定格式打印集合的方法(ArrayList类型作为参数)，使用{}扩起集合，使用@分隔每个元素。
格式参照 {元素@元素@元素}。

System.out.println(list);       [10, 20, 30]
printArrayList(list);           {10@20@30}
 */

import java.util.ArrayList;

public class Demo03ArrayListPrint {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("a");
        list.add("b");
        list.add("c");
        list.add("d");
        System.out.println(list); // [a, b, c, d]

        printArrayList(list);
    }

    // ↓ 注意 参数中的 ArrayList<String>  泛型也要传参 不要 ArrayList list
    public static void printArrayList(ArrayList<String> list) {
        String str = "{";
        int count = list.size();
        for (int i = 0; i < count; i++) {
            str += list.get(i);
            if (i != (count-1)) {
                str += "@";
            }
        }
        str += "}";
        System.out.println(str);
    }
}
