// third-party libraries
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// check node environment
const prodMode = process.env.NODE_ENV === "production";

// configuration
module.exports = {
  devServer: { historyApiFallback: true },
  devtool: prodMode ? false : "source-map",
  mode: prodMode ? "production" : "development",
  entry: { app: "./client/index.js" },
  output: {
    filename: prodMode ? "[name].[contenthash:8].min.js" : "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./client/favicon.ico",
      hash: true,
      template: "./client/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: prodMode ? "[name].[contenthash:8].css" : "[name].css",
    }),
  ],
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
};
