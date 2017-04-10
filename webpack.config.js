var webpack = require('webpack');
var path = require('path');
var config = {
  context: __dirname + '/src', // `__dirname` is root of project and `src` is source
  entry: {
    app: './index.js',
  },
  output: {
    path: __dirname + '/dist', // `dist` is the destination
    filename: 'bundle.js',
  },
  devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9000
   }
};

module.exports = config;