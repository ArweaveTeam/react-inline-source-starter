const path = require('path');
const prodConfig = require('./webpack.prod');

module.exports = {
  ...prodConfig,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true
  }
};
