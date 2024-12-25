const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { watchFile } = require("fs");
const { type } = require('os');

module.exports = {
  entry: "./src/scripts/scripts.js", // Основной JS-файл
  output: {
    filename: "bundle.js", // Имя собранного файла
    path: path.resolve(__dirname, "dist"), // Папка для сборки
    clean: true,
  },
  mode: "development", // Режим разработки
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // Обрабатываем только JS-файлы
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Компиляция нового JS в старый
          options: {
            presets: ["@babel/preset-env"], // Поддержка ES6+
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/, // Для файлов .svg
        use: "svg-inline-loader", // Применяем svg-inline-loader
      },
      // {
      //   test: /\.svg$/,
      //   type: "asset/resource",
      //   generator: {
      //     filename: "icons/[name][ext]",
      //   },
      // },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 5500,
    open: true,
    hot: true,
    liveReload: true,
    watchFiles: {
      paths: ["./src/index.html"],
      options: {
        usePolling: true, // Включает polling для отслеживания изменений (если ОС не поддерживает нативное отслеживание)
      },
    },
  },
};
