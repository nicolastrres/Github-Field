var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const PATHS = {
  lib: path.resolve(__dirname, 'lib'),
  source: path.resolve(__dirname, 'src'),
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
}

module.exports = {
  devtool: 'source-map',
  entry: PATHS.entry,
  output: {
    path: PATHS.lib,
    publicPath: path.join(__dirname, 'lib/'),
    filename: 'GithubField.js',
    library: 'react-github-field',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.EnvironmentPlugin(['GITHUB_TOKEN'])
  ],
  module: {
    loaders: [
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

  externals: [{
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }, {
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  }]
};