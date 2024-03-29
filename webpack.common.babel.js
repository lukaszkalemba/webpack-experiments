export default {
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js'
  },

  module: {
    rules: [
      { test: /\.html$/, use: ['html-loader'] },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'img'
          }
        }
      }
    ]
  }
};
