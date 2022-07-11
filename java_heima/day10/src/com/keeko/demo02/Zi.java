package com.keeko.demo02;

// ↓ Zi类 继承了父类，又是MyInterface的实现类
public class Zi extends Fu implements MyInterface {
}

// 如果Fu 和 MyInterface默认方法产生冲突，优先用父类当中的方法
