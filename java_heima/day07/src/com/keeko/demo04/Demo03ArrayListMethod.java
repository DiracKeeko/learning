package com.keeko.demo04;

/*
ArrayList当中的常用方法有：

public boolean add(E e)：向集合当中添加元素，参数的类型和泛型一致。返回值代表添加是否成功。
备注：对于ArrayList集合来说，add添加动作一定是成功的，所以返回值可用可不用。
但是对于其他集合（今后学习）来说，add添加动作不一定成功。

public E get(int index)：从集合当中获取元素，参数是索引编号，返回值就是对应位置的元素。

public E remove(int index)：从集合当中删除元素，参数是索引编号，返回值就是被删除掉的元素。

public int size()：获取集合的尺寸长度，返回值是集合中包含的元素个数。
 */

import java.util.ArrayList;

public class Demo03ArrayListMethod {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();

        boolean res = list.add("A");
        System.out.println(list); // [A]
        System.out.println("添加的结果res->" + res); // true

        list.add("B");
        list.add("C");
        list.add("D");
        list.add("E");

        // 从集合中获取元素：get。索引值从0开始
        String str = list.get(2);
        System.out.println("第2号索引位置：" + str); // C
        
        // list.remove(3) // 输入之后 按alt + enter 可以出现自动补全, enter enter
        String el = list.remove(3);
        System.out.println("被删除的是：" + el); // D
        System.out.println(list);

        int size = list.size();
        System.out.println("集合的长度是：" + size); // 4
    }
}
