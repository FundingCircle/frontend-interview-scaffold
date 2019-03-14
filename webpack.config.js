module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.jpg$/,
        use: ['file-loader'],
      }
    ],
  },
  devServer: {
    contentBase: 'public',
    host: '0.0.0.0',
  },
};
