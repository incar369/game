const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.js',
    clean: true,
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  mode: 'development',
  //mode: 'production',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
  },
};