"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ↓ 其他controller无需引入，也可以调用user service
    const res = await ctx.service.user.detail(20);
    console.log("res in home->", res);
    // ctx.body = 'egg - hello world!';
    ctx.body = res; // return an object
  }

  async newApplication() {
    const { ctx, app } = this;
    // const packageInfo = app.package("scripts");
    // console.log("package->", packageInfo);
    const allPack = app.allPackage;
    console.log("allPack->", allPack);
    ctx.body = "newApp";
  }

  async newContext() {
    const { ctx } = this;
    const params = ctx.getParams("id");
    console.log("params->", params);
    ctx.body = "newContext";
  }

  async newRequest() {
    const { ctx } = this;
    const token = ctx.request.token;
    ctx.body = token;
  }

  async newResponse() {
    const { ctx } = this;
    ctx.response.token = "ccc111";
    const base64Str = ctx.helper.base64Encode("newResponse");
    ctx.body = base64Str;
  }

  async demo() {
    const { ctx } = this;
    ctx.body = "demo page";
  }
}

module.exports = HomeController;
