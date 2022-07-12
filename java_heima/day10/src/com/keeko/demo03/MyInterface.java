package com.keeko.demo03;

/*
这个子接口当中有几个方法？答：4个。
methodA 来源于接口A
methodB 来源于接口B
methodCommon 同时来源于接口A和B (抽象方法,不会冲突)
method 来源于我自己
 */
public interface MyInterface extends MyInterfaceA, MyInterfaceB {

    public abstract void method();


    @Override
    public default void methodDefault() {

    }
}
