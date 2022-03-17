'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;

    const user = ctx.cookies.get('user');
    // ↓ render app/view/ 目录下面的文件
    await ctx.render("user.html", {
      id: 100,
      name: "admin",
      lists: [ 'js', 'ts', 'php' ],
      user: user ? JSON.parse(user) : null,
    }, {
      delimiter: "%" // 指定这个文件渲染的定界符
    }); 
  }

  async lists() {
    const { ctx, app } = this;
    console.log("mysql->", app.mysql);
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });

    ctx.body = [{ id: 123 }];
  }

  async login(){
    const { ctx } = this;
    const body = ctx.request.body;
    ctx.cookies.set("user", JSON.stringify(body));

    ctx.body = {
      status: 200,
      data: body
    };
  }

  async logout(){
    const { ctx } = this;
    ctx.cookies.set("user", null);

    ctx.body = {
      status: 200
    };
  }

  async detail() {
    const { ctx } = this;
    // console.log("ctx.query->", ctx.query); // 如 {id: 100}
    // query ↓ 对应query型 /user?id=2
    const res = await ctx.service.user.detail(10);
    console.log(res);
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


    const rule = {
      name: { type: 'string' },
      age: { type: 'number' },
    };
    ctx.validate(rule);

    ctx.body = {
      code: 0,
      data: ctx.request.body,
      msg: '',
    };
    // const res = await ctx.service.user.add(ctx.request.body);
  }

  // ↓ edit方法使用put请求，put的参数与post类似
  async edit() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      data: ctx.request.body,
      msg: '',
    };
  }

  // ↓ delete方法使用delete请求，delete的参数与post类似
  async del() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      data: ctx.request.body,
      msg: '',
    };
  }

}

module.exports = UserController;
