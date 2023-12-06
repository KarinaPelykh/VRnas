const path = require("path");
module.exports = {
  mode: "development",
  entry: "./public/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "bundle"),
  },
  devServer: {
    port: 3000,
  },
};
