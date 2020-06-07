const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  mode: "production",
  // entry: {
  //   app: "./src/view/index.js",
  //   listApp: "./src/view/page-list.js",
  //   resultApp: "./src/view/page-result.js"
  // },
  // output: {
  //   filename: "[name].js",
  //   path: __dirname + "/dist"
  // },
  module: {
    rules: [
      /* style and css loader */
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
      },
      /* babel loader */
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                { plugins: ["@babel/plugin-proposal-class-properties"] }
              ]
            }
          }
        ]
      }
    ]
  }

  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./src/index.html",
  //     filename: "index.html"
  //   }),
  //   new HtmlWebpackPlugin({
  //     template: "./src/pageList.html",
  //     filename: "pageList.html"
  //   }),
  //   new HtmlWebpackPlugin({
  //     template: "./src/pageResult.html",
  //     filename: "pageResult.html"
  //   })
  // ]
};
