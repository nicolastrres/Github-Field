const webpack = require('webpack');
const path = require('path');

const PATHS = {
  build: path.resolve(__dirname, 'prod-build'),
  source: path.resolve(__dirname, 'src'),
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
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
};

module.exports = config;
