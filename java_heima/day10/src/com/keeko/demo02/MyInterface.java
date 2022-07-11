package com.keeko.demo02;

public interface MyInterface {

    public default void method111() {
        System.out.println("接口的默认方法");
    }

}
