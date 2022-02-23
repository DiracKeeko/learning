const cluster = require('cluster');
const http = require('http');
const os = require('os');

const cpus = os.cpus().length;
console.log("cpus->", cpus);

if (cluster.isMaster) {
  console.log(`主进程 ${process.pid} 正在运行`);
  
  // 衍生工作进程
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
} else {
  // 工作进程可以共享任何tcp连接
  // 这里共享一个http服务器
  http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});
    res.write("hello");
    res.end();
  }).listen(8000);

  console.log(`工作进程 ${process.pid} 已经启动`);
}