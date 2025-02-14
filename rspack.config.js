const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./script/main.js",
  // devServer: {
  //   port: 1113,
  //   open: true,
  //   hot: true,
  //   static: {
  //     directory: "./",
  //   },
  // },
  mode: 'production',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/happy-birthday/",
    clean: true,
  },
  builtins: {
    html: [
      {
        template: "./index.html",
        inject: true,
      },
    ],
  },
};
