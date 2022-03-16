/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1645458417257_5743';

  // add your middleware config here
  config.middleware = ["httpLog"];

  // ↓ 配置 httpLog middleware options
  config.httpLog = {
    type: "test"
  }

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.view = {
    mapping: {
      ".html": "ejs" // 以.html结尾的文件用ejs模板引擎渲染
    }
  };
  config.ejs = {
    // delimiter: "$" // 定界符<$= id $>, 这里修改是修改全局的定界符
    delimiter: "%"
  };

  config.mysql = {
    app: true, // 是否将mysql挂载到app下  true (默认)
    agent: false, // 是否挂载到代理下面 false (默认)
    client: {
      host: "127.0.0.1",
      port: "3306",
      user: "root",
      password: "root",
      database: "egg"
    }
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
