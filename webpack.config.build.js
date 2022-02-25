const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')
const config = require('./webpack.config')

module.exports = merge(config, {
  mode: 'production',

  plugins: [
    new CleanWebpackPlugin()
  ],

  output: {
    path: path.join(__dirname, 'public'),
  }
});
