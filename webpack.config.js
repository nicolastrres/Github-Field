const webpack = require('webpack');
const path = require('path');

const PATHS = {
  build: path.resolve(__dirname, 'build'),
  source: path.resolve(__dirname, 'src'),
  entry: path.resolve(__dirname, 'src', 'index.jsx')
}

const config = {
  entry: PATHS.entry,
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  }
};

module.exports = config;
