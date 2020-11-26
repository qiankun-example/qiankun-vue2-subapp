const { name } = require('./package.json')
/**@type{ import('@vue/cli-service').ProjectOptions} */
module.exports = {
  publicPath: '/main/qiankun-vue2-subapp',
  outputDir: 'qiankun-vue2-subapp',
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
  devServer: {
    port: process.env.VUE_APP_PORT,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}