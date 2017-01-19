const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  build: path.resolve(__dirname, 'build'),
  source: path.resolve(__dirname, 'src'),
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  template: path.resolve(__dirname, 'src', 'index.tmpl.html')
}

const config = {
  entry: PATHS.entry,
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : PATHS.source,
        loader : 'babel'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({template: PATHS.template})]
};

module.exports = config;
