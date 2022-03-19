'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async lists() {
    try {
      const { app } = this;
      // 查询整张表 mysql.select("user"); mysql.selset("表名");
      const res = await app.mysql.select("user"); 
      return res;
    } catch (err) {
      console.log("err->", err);
      return null;
    }
  }
  async detail(id) {
    return {
      id,
      name: 'John',
      age: 18,
    };
  }
  async detail2(id) {
    try {
      const { app } = this;
      // 查询单条数据 mysql.get("表名", {});
      const res = await app.mysql.get("user", {id}); 
      return res;
    } catch (err) {
      console.log("err->", err);
      return null;
    }
  }
}

module.exports = UserService;
