const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app:'./src/app.js',
    speedruns:'./src/speedruns.js'
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: 'gundwn.gg',
      hash: false,
      myPageHeader: 'gundwn.gg',
      template: './src/index.html'
    }),
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
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        },
      },
      //{
      //  test: /\.json$/,
      //  type: 'json'
      //},
      //{
      //  test: /.json$/,
      //  use: 'json'
      //}
    ],
  }
};
