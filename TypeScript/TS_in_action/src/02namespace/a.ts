namespace Shape {
    const pi = Math.PI
    export function cricle(r: number) {
        return pi * r ** 2
    }
}

// 命名空间可以拆分

// 命名空间和模块不要混用
// 不要在一个模块中使用命名空间
// 命名空间最好在全局环境中使用

/* 
  正确的使用命名空间的方法是
  将多个命名空间文件编译为一个js文件，再在全局使用
  （如在index.html中 用scrpit标签引入）
*/