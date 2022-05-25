const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

// ↓ awesome-typescript-loader 自带类型检查插件
const { CheckerPlugin } = require("awesome-typescript-loader");

// 用类型检查插件，可以单独开启类型检查进程
// CheckerPlugin类型检查有遗漏

// 结论：综合起来，建议使用ts-loader

module.exports = {
  entry: {
    'app': './src/index.ts'
  },
  output: {
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      // {
      //   test: /\.jsx?$/,
      //   use: [{
      //     loader: 'babel-loader'
      //   }],
      //   exclude: /node_modules/
      // },
      {
        test: /\.tsx?$/i,
        use: [{
          // loader: 'ts-loader',
          loader: 'awesome-typescript-loader', 
          // ↑ awesome-typescript-loader 更适合结合babel使用

          // 传入options
          options: {
            transpileOnly: true, // 默认false, 
            // 开启之后(true)只做语言转换，不做类型检查
            // 开启后，通过插件ForkTsCheckerWebpackPlugin，做类型检查
          }
        }],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/tpl/index.html'
    }),
    // new ForkTsCheckerWebpackPlugin(),
    new CheckerPlugin()
  ]
}
