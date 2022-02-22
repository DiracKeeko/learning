const { exec } = require("child_process");

// exec可以创建子进程并执行shell命令
// child_process.exec(command[, options][, callback])
// http://nodejs.cn/api/child_process.html#child_processexeccommand-options-callback

// ↓ 省略了options参数，只有command和callback
exec("cat a.js", (error, stdout, stderr) => {
  // error -> 创建子进程报错(如 cat a.js 不存在a.js)，返回error
  // console.log("error->", error);  // 若没有a.js文件，报错

  if (error) {
    console.log("error->");
    return
  }
  
  // stdout -> 创建子进程成功 执行shell命令成功，返回stdout
  // stderr -> 创建子进程成功 执行shell命令，返回stdout
  
  // ↓ 测试windows下 cmd 中不能cat a.js, 所以一直进入error
  console.log("strerr->", stderr); 
  console.log("stdout->", stdout);

})