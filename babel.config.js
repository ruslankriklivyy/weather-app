module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "@babel/plugin-transform-runtime",
        {
          regenerator: true,
        },
      ],
      ["module:react-native-dotenv"],
      ["react-native-reanimated/plugin"]
    ],
  };
};
