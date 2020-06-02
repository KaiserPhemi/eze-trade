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
    rules: [],
  },
};
