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
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      }, 
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.EnvironmentPlugin(['GITHUB_TOKEN']),
    new HtmlWebpackPlugin({template: PATHS.template})
  ]
};

module.exports = config;
