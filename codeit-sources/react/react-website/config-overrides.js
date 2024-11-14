// /config-overrides.js
const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@components": path.resolve(__dirname, "src/components"),
    "@pages": path.resolve(__dirname, "src/pages"),
    "@assets": path.resolve(__dirname, "src/assets"),
    "@utils": path.resolve(__dirname, "src/utils"),
    "@api": path.resolve(__dirname, "src/api"),
  })
);