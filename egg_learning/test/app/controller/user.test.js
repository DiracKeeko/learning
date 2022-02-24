'use strict';

const { app } = require('egg-mock/bootstrap');

describe('user test', () => {
  // 语法 it("描述", 回调函数);
  // 回调函数有同步和异步两种模式
  it('/user/index test', () => {
    return app.httpRequest()
      .get('/user')
      .expect(200)
      .expect('user index');
  });

  it('/user/lists test', async () => {
    await app.httpRequest()
      .get('/user/lists')
      .expect(200)
      .expect('[{"id":123}]');
  });
});
