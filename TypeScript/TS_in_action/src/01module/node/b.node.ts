// exports === module.exports
// 导出多个变量

// module.exports = {}

/*
  在commonjs模块系统中

  module.exports被视为顶级导出
  exports.x 被视为次级导出

  顶级导出会覆盖次级导出(无论顶级导出module.exports的位置先后)
*/

exports.c = 3
exports.d = 4