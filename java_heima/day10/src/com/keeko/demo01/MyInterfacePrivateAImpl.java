package com.keeko.demo01;

public class MyInterfacePrivateAImpl implements MyInterfacePrivateA {

    public void methodAnother() {

        // 如果接口中的methodCommon是默认方法, 那么这个实现类可以访问默认方法。
        // 直接访问到了接口中的默认方法，这样是错误的！
        // 正确的做法是： 将methodCommon改为私有方法

        // methodCommon();
    }

}