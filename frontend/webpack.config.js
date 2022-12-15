const HtmlWebpackPlugin = require('html-webpack-plugin');
const Path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const Webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './src/index.tsx'],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  output: {
    path: Path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin()],
  },
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',
  devServer: {
    static: __dirname,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 9091,
  },
  module: {
    rules: [{
      test: /\.(js|ts)x?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }],
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VERSION': JSON.stringify(process.env.VERSION || 'development'),
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};
