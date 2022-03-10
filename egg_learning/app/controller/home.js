'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ↓ 其他controller无需引入，也可以调用user service
    const res = await ctx.service.user.detail(20);
    console.log('res in home->', res);
    // ctx.body = 'egg - hello world!';
    ctx.body = res; // return an object
  }
  
  async newApplication() {
    const { ctx, app } = this;
    const packageInfo = app.package("scripts");
    console.log("package->", packageInfo);
    ctx.body = "newApp";
  }

  async demo() {
    const { ctx } = this;
    ctx.body = 'demo page';
  }
}

module.exports = HomeController;
