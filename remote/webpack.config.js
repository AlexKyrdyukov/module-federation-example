const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/remote.js',
  output: {
    path: path.resolve(__dirname, 'dist'),  // Папка для сборки
    filename: 'bundle.js',            
    publicPath: '/',
  },
  devServer: {
    port: 3001,
    open: true,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',  // Разрешаем доступ с любого домена
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ModuleFederationPlugin({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './remoteLogic': './src/remote.js', // Экспонируем функцию
      },
      shared: [],
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};