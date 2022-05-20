export = function () {
    console.log("I'm default")
}
/* 
  export =   会被编译成 module.exports
  相当于commonjs中的顶级导出

  这样如果再有次级导出，就会报错
*/
// export let a = 1 // 次级导出，报错