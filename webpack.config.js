const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/index.js",
  },

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src/"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"],
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
  },
  plugins: [
    new webpack.DefinePlugin({
      "typeof CANVAS_RENDERER": JSON.stringify(true),
      "typeof WEBGL_RENDERER": JSON.stringify(true),
    }),
    new webpack.DefinePlugin({
      "typeof CANVAS_RENDERER": JSON.stringify(true),
      "typeof WEBGL_RENDERER": JSON.stringify(true),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "production-dependencies",
      filename: "production-dependencies.bundle.js",
    }),
  ],
};
