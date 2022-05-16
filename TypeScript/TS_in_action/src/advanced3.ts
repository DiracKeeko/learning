// #类型保护
/* 
  1.TypeScript能够在特定的区块中保证变量属于某种确定的类型。
  2.可以在此区块中放心地引用此类型的属性,或者调用此类型的方法。
*/
/* 
  四种创建区块的方法
  1.使用 instanceof
  2.使用 in (判断属性是否属于对象)
  3.typeof (判断基本类型)
  4.类型保护函数
*/
enum Type { Strong, Weak }

class Java {
  helloJava() {
    console.log("Hello Java");
  }
  java: any
}

class JavaScript {
  helloJavaScript() {
    console.log("Hello JavaScript");
  }
  javascript: any
}

// 特殊的返回值 lang is Java -> 类型谓词
function isJava(lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJava !== undefined;
}

function getLanguage(type: Type, x: string | number) {
  const lang = type === Type.Strong ? new Java() : new JavaScript();
  // ↓ 使用类型断言通过编译器检测
  // if ((lang as Java).helloJava) {
  //   (lang as Java).helloJava();
  // } else {
  //   (lang as JavaScript).helloJavaScript();
  // }

  // 1.instanceof
  // if (lang instanceof Java) {
  //   lang.helloJava();
  // } else {
  //   lang.helloJavaScript()
  // }
  
  // 2.in
  // if ('java' in lang) {
  //   // console.log("000");
  //   lang.helloJava();
  // } else {
  //   // console.log("001"); // 会进入这里
  //   lang.helloJavaScript();
  //   // 这里会有报错，原因未知
  // }

  // 3.typeof
  // if (typeof x === 'string') {
  //   x.length
  // } else {
  //   x.toFixed(2)
  // }

  // 4.函数
  if (isJava(lang)) {
    lang.helloJava();
  } else {
    lang.helloJavaScript()
  }
  return lang;
}

getLanguage(Type.Strong, 3);