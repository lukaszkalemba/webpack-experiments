import * as path from 'path';
import common from './webpack.common.babel';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default merge(common, {
  mode: 'development',

  module: {
    rules: [
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
    })
  ]
});
