const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
  entry: '.src/main.js',
  output: { publicPath: 'auto' },
  mode: 'development',
  plugins: [
    new ModuleFederationPlugin({
      name: 'hostApp',
      remotes: {
        remoteApp: 'remoteApp@https://ВАШ_УРЛ/remoteEntry.js',
      },
    }),
  ],
};