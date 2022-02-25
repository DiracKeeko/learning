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
    ctx.body = ctx.query.id;
  }

  async detail2() {
    const { ctx } = this;
    // console.log("ctx.params->", ctx.params); // 如 {id: 200}
    ctx.body = ctx.params.id;
  }

}

module.exports = UserController;
