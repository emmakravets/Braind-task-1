const path = require(`path`);

module.exports = {
  mode: `development`,
  entry: `./source/js/main.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `source`)
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, `source/js/modules`)
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: `babel-loader`,
        query: {
          presets: [`@babel/preset-env`],
        },
      },
    ],
  },
  devtool: `source-map`,
};
