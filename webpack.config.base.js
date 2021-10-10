const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  entry: "./src/index.js",
  output: {
    filename: "index.[contenthash].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "aaa",
      template: "src/assets/index.html"
    }),
  
  ],
  module: {
    rules: [
      {
        test: /\.sass$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // `dart-sass` 是首选
              implementation: require('dart-sass'),
            },
          },
        ],
      },
    ],
  },

};