package com.keeko.demo04;

/*
如果希望向集合ArrayList当中存储基本类型数据，必须使用基本类型对应的“包装类”。

基本类型    包装类（引用类型，包装类都位于java.lang包下）
byte        Byte
short       Short
int         Integer     【特殊】
long        Long
float       Float
double      Double
char        Character   【特殊】
boolean     Boolean

从JDK 1.5+开始，支持自动装箱、自动拆箱。

自动装箱：基本类型 --> 包装类型
自动拆箱：包装类型 --> 基本类型
 */

import java.util.ArrayList;

public class Demo05ArrayListBasic {
    public static void main(String[] args) {
        ArrayList<String> listA = new ArrayList<>();

        // ArrayList<int> listB = new ArrayList<>(); // 报错
        // 因为集合保存的都是地址值，基本数据类型没有地址值

        // 如果希望向集合ArrayList当中存储基本类型数据，必须使用基本类型对应的“包装类”。
        ArrayList<Integer> listC = new ArrayList<>();
        listC.add(3);
        listC.add(5);
        System.out.println(listC);

        int num = listC.get(1); // 直接 int 就可以 JDK1.5+ 自动拆箱装箱
        System.out.println("第1号元素是：" + num);
    }
}
