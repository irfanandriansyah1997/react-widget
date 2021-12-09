const path = require('path');
// eslint-disable-next-line import/no-unresolved
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = {
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    headers: {
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Origin': '*'
    },
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
          loader: 'babel-loader',
          options: {
            caller: { target: 'web' }
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  // Where files should be sent once they are bundled
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '/dist')
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new LoadablePlugin({ filename: 'stats.json', writeToDisk: true })
  ],
  target: 'web'
};
