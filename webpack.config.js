const path = require("path");

module.exports = {
  entry: "./src/scripts/scripts.js", // Основной JS-файл
  output: {
    filename: "bundle.js", // Имя собранного файла
    path: path.resolve(__dirname, "dist"), // Папка для сборки
  },
  mode: "development", // Режим разработки
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
    ],
  },
};
