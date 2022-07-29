const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "Webpack Example App",
      header: "Webpack Example Title",
      metaDesc: "Webpack Example Description",
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
  mode: "development",
  output: {
    clean: true,
  },
  devServer: {
    static: "./dist",
    open: true,
  },
};
