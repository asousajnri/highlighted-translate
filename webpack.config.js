const path = require('path');

module.exports = {
  entry: {
    background: './src/js/background/index.js',
    content: './src/js/content/index.js',
    options: './src/js/options/index.js',
    popup: './src/js/popup/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread'],
          },
        },
      },
    ],
  },
};
