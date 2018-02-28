let webpackMerge = require('webpack-merge');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');
let commonConfig = require('./webpack.common.js');
let helpers = require('./helpers');

let devConfig = {
  devtool: 'cheap-module-eval-source-map',

  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080',
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new FlowBabelWebpackPlugin(),
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
};

module.exports = webpackMerge(commonConfig, devConfig);
