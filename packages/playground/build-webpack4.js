// @ts-check
const path = require("path");
const webpack4 = require("webpack4");
const { sentryWebpackPlugin } = require("@sentry/bundler-plugin-core");

const placeHolderOptions = require("./config.json");

webpack4(
  {
    mode: "production",
    entry: "./src/entrypoint1.js",
    cache: false,
    output: {
      path: path.resolve(__dirname, "out", "webpack4"),
      filename: "index.js",
      library: "ExampleBundle",
      libraryTarget: "commonjs",
    },
    plugins: [sentryWebpackPlugin({ ...placeHolderOptions })],
    devtool: "source-map",
  },
  (err) => {
    if (err) {
      throw err;
    }
  }
);
