const childProcess = require('child_process');

const child = childProcess.fork("./child.js");

// ↓ 接收子进程发来的消息
child.on("message", msg => {
  console.log(`来自子进程-> ${msg}`);
});

child.send("这里是主进程");