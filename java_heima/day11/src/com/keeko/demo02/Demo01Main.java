package com.keeko.demo02;

/*
Java中有四种权限修饰符：
                    public  >   protected   >   (default)   >   private
同一个类（我自己）        YES         YES             YES             YES
同一个包（我邻居）        YES         YES             YES             NO
不同包子类（我儿子）      YES         YES             NO              NO
不同包非子类（陌生人）     YES         NO              NO              NO

↑ 这个表 用于说明被权限修饰符修饰的变量，能被哪些 变量/方法 访问

注意事项：(default)并不是关键字“default”，而是根本不写。
 */
public class Demo01Main {
}
