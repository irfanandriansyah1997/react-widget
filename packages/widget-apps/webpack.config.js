const path = require('path');
// eslint-disable-next-line import/no-unresolved
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 9000,
    watchContentBase: true
  },
  // Rules of how webpack will take our files, complie & bundle them for the browser
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },

  // Where files should be sent once they are bundled
  output: {
    filename: 'index.bundle.js',
    path: path.join(__dirname, '/dist')
  },
  plugins: [new MiniCssExtractPlugin()]
};
