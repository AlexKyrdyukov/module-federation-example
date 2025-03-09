const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),  // Папка для сборки
    filename: 'bundle.js',
    publicPath: '/',  // Важно для GitHub Pages
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    headers: {
      'Cache-Control': 'no-store',  // Отключаем кеширование
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        remote: 'remote@http://localhost:3001/remoteEntry.js', // Подключаем remote
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};