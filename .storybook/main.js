module.exports = {
  stories: ["../demo/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [],
  core: {
    builder: "webpack5",
  },
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: "[local]__[hash:base64:5]",
              exportLocalsConvention: "camelCase",
            },
            importLoaders: 1,
            esModule: false,
          },
        },
        {
          loader: "sass-loader",
          options: {
            implementation: require("sass"),
          },
        },
      ],
    });

    return config;
  },
};
