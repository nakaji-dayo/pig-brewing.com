var path = require("path");
module.exports = {
  entry: "./app/app.js",
  output: {
    path: path.resolve(__dirname, "javascripts"),
    filename: "app.bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js.*$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    alias: {
      vex: 'vex-js'
    }
  }
  //devtool: 'inline-source-map'
};
