// #高级类型：
// ##条件类型
// T extends U ? X : Y
// 如果类型T可以被赋值给类型U,那么结果类型就是X类型,否则就是Y类型

type TypeName<T> =
  T extends string ? 'string' :
  T extends number ? 'number' :
  T extends boolean ? 'boolean' :
  T extends undefined ? 'undefined' :
  T extends Function ? 'Function' :
  'object'

type T1 = TypeName<string> // T1是sting类型
type T2 = TypeName<string[]> // T2是object类型

// 分布式条件类型
// T是联合类型(A和B的联合类型)
// (A | B) extends U ? X : Y
// 结果类型变成多个条件类型的联合类型

// (A | B) extends U ? X : Y
// 上面等价于下面
// A extends U ? X : Y | B extends U ? X : Y

type T3 = TypeName<string | string[]>;

// 条件类型可以实现类型过滤
type Diff<T, U> = T extends U ? never : T;

type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>;
// T4的类型是'b', 'c'的联合类型

// Diff<'a', 'a' | 'e'> | Diff<'b', 'a' | 'e'> | Diff<'c', 'a' | 'e'> 
// never | 'b' | 'c'
// 'b' | 'c'

type NotNull<T> = Diff<T, undefined | null>;
type T5 = NotNull<string | number | undefined | null>

// TS内置实现 -> 
// Exclude<T, U> // === Diff
// NonNullable<T> // === NotNull
// Extract<T, U> // 与Exclude相反

type T6 = Extract<'a' | 'b' | 'c', 'a' | 'e'>;

// ReturnType<T> // 获取函数返回值的类型
type T7 = ReturnType<() => string> // T7的类型是string
