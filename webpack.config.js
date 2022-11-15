const path = require("path");

module.exports = {
  mode: "production",
  entry: ["./js/newsletter.js"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
