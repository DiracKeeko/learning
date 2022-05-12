// 泛型类与泛型约束
class Logg<T> {
  run(value: T) {
    console.log(value);
    return value;
  }

  // 注意： 泛型不能应用于类的静态成员
  /*
    // 会报错
    static jump(value: T) {
      console.log(value);
      return value;
    } 
  */
}

// 可以指定参数类型 number
let logg1 = new Logg<number>();
logg1.run(1);

// 也可以不指定，不指定-> 参数可以是任意类型
let logg2 = new Logg();
logg2.run({a: 1})



/* 
function logFunc<T> (value: T): T {
  // 会报错 因为 T没有.length
  console.log(value, value.length);
  return value
}
*/

// 类型约束
interface Length {
  length: number
}

function logFunc<T extends Length> (value: T): T {
  // 会报错 因为 T没有.length
  console.log(value, value.length);
  return value
}

logFunc([1]); // 数组[1] 有.length
logFunc('abc'); // 字符串'abc' 有.Length
logFunc({length: 3}); // 对象有length属性
// logFunc({len: 3}); // 这个对象没有length属性，报错