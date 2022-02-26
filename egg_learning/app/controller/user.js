'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'user index';
  }

  async lists() {
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });

    ctx.body = [{ id: 123 }];
  }

  async detail() {
    const { ctx } = this;
    // console.log("ctx.query->", ctx.query); // 如 {id: 100}
    // query ↓ 对应query型 /user?id=2
    ctx.body = ctx.query.id;
  }

  async detail2() {
    const { ctx } = this;
    // console.log("ctx.params->", ctx.params); // 如 {id: 200}
    // params ↓ 对应restful型路由 /user/:id  -> /user/3
    ctx.body = ctx.params.id;
  }

  async add() {
    const { ctx } = this;

    // ctx.body = "add";
    ctx.body = {
      code: 0,
      data: ctx.request.body,
      msg: '',
    };
  }

}

module.exports = UserController;
