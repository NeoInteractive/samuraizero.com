var path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, "src"),
        styles: "/scss",
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass|less)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              additionalData: '@import "assets/scss/_variables.scss";',
            },
          },
        ],
      },
    ],
  },
};
