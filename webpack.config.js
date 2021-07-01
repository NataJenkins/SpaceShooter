var path = require("path");

module.exports = {
  entry: {
    app: [
      "./src/phaser.min.js",
      "./src/classes/mc/controller.js",
      "./src/classes/comps/scoreBox.js",
      "./src/classes/comps/bar.js",
      "./src/classes/utils/align.js",
      "./src/classes/utils/alignGrid.js",
      "./src/classes/utils/mediaManager.js",
      "./src/classes/ui/flatButton.js",
      "./src/scenes/sceneMain.js",
      "./src/scenes/sceneTitle.js",
      "./src/scenes/sceneOver.js",
      "./src/main.js",
      "./src/constants.js",
    ],
  },

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
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
};
