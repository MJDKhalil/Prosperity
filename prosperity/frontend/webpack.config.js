const path = require("path");
const webpack = require("webpack");

module.exports = {
  target: 'web', // only for develomplent
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js", 
  },

  stats: {
    // Configure the console output
    errorDetails: true, //this does show errors
    colors: false,
    modules: true,
    reasons: true
  },
  
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: { loader: "babel-loader", }, },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("production"),
      },
    }),
  ],
};
