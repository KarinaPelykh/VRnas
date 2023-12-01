const path = require("path");
module.exports = {
  mode: "development",
  entry: "./public/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 3000,
  },
};
