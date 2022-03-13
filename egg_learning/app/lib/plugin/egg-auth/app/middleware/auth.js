// ↓ 插件可以处理业务逻辑 (与之对比，中间件更适合处理请求)
module.exports = options => {
  return async (ctx, next) => {
    const url = ctx.request.url;
    const user = ctx.session.user;

    if (!user) {
      ctx.body = {
        code: "1",
        msg: "用户未登录"
      };
    } else {
      await next();
    }
  }
}