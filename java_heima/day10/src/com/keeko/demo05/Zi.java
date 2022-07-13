package com.keeko.demo05;

public class Zi extends Fu {

    // 成员变量不能进行覆盖重写
    // 不能加 @override
    int num = 20;

    int age = 16;

    @Override
    public void showNum() {
        System.out.println(num);
    }


}
