const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  devServer: {
    port: 3010,
    hot: true, // watches source code and reloads server !! only with caching and cleanup enabled
    open: true, // otwiera przeglądarkę na starcie servera
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Web Server",
      filename: "index.html",
      template: "./src/template.html",
    }),
  ],
};
