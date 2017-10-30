const path = require("path");

// const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./index.html",
  filename: "index.html",
  inject: "body"
});

module.exports = {
  devtool: "source-map",
  entry: "./app/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        loader: "babel-loader",
        exclude: path.resolve(__dirname, "node_modules"),
        options: {
          compact: true
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  },
  /*    externals: {
        "react": 'React',
        "react-dom": 'ReactDOM'
    },  */
  plugins: [HtmlWebpackPluginConfig]
};
