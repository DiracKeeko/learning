console.log(`子进程 ${process.pid}`);

process.on("message", (msg) => {
  console.log(`来自master-> ${msg}`);
});

process.send("这里是子进程");