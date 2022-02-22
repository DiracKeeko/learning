const { spawn } = require('child_process');

// spawn也是用来创建子进程
// spawn返回的结果是一个stream流

// child_process.spawn(command[, args][, options])
const ls = spawn("ls", ["-a"], {encoding: "utf8"});

// ↓ windows下 cmd 中不能执行ls -a, 所以一直throw err
ls.stdout.on("data", (data) => {
  console.log("stdout->", data);
})

ls.stderr.on("data", (data) => {
  console.log("stderr->", data);
})

ls.on("close", (code) => {
  console.log("close->", code);
})