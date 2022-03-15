'use strict';

const path = require('path');

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
};

exports.auth = {
  enable: false,
  path: path.join(__dirname, '../lib/plugin/egg-auth')
  // package: "xxx", // package指向第三方包名, path指向插件, 
  // package属性和path属性互斥
}

exports.mysql = {
  enable: true,
  package: "egg-mysql"
}