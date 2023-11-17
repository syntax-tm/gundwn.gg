const path = require('path');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app:'./src/app.js',
    speedruns:'./src/speedruns.js'
  },
  plugins: [
    new FaviconsWebpackPlugin('./src/favicon.ico'),
    new HtmlWebpackPlugin({
      title: '@Gundwn',
      hash: false,
      myPageHeader: 'gundwn.gg',
      template: './src/index.html'
    }),
    new webpack.ProgressPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg|tiff|webp|bmp)$/i,
        loader: 'url-loader',
        options: {
          limit: true
        },
      },
    ],
  }
};
