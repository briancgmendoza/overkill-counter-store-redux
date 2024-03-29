const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "../src", "index.js"),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "../src", "index.html"),
      favicon: path.resolve(__dirname, "../src/assets", "favicon.ico"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        include: [path.resolve(__dirname, "../src")],
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:5]",
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
          options: {
            iesafe: true,
          },
        },
      },
      {
        test: /\.js?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  output: {
    path: path.resolve(__dirname, "../", "public"),
  },
  resolve: {
    extensions: [".js"],
  },
};
