const Controller = require('egg').Controller;

class CurlController extends Controller {
  async curlGet() {
    const { ctx } = this;
    const res = await ctx.curl("http://localhost:7001/", {
      // dataType: "text", // ←  如果是string, "text"
      dataType: "json" // ← 如果是object, "json"
    });
    console.log("res in curlGet->", res);
    ctx.body = {
      status: 200,
      data: res.data
    }
  }
  async curlPost() {
    const { ctx } = this;
    console.log("res.request.body", ctx.request.body);
    const res = await ctx.curl("http://localhost:7001/user/add", {
      method: "post",
      contentType: "json",
      data: ctx.request.body,
      dataType: "json"
    })
    console.log("res in curlPost->", res);
    ctx.body = res.data;
  }
}

module.exports = CurlController;