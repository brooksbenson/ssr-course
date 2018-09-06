const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  entry: ['babel-polyfill', './src/client/client.js'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  }
};

module.exports = merge(baseConfig, config);