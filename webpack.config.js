const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const PATHS = {
  build: path.resolve(__dirname),
  source: path.resolve(__dirname, 'src'),
  demo: path.resolve(__dirname, 'demo'),
  entry: path.resolve(__dirname, 'demo', 'index.jsx'),
  template: path.resolve(__dirname, 'demo', 'index.tmpl.html')
}

const config = {
  entry: PATHS.entry,
  output: {
    path: PATHS.build,
    filename: 'index.js',
    library: 'GithubField'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : [
          PATHS.source,
          PATHS.demo
        ],
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
    new HtmlWebpackPlugin({
      template: PATHS.template
    })
  ]
};

module.exports = config;
