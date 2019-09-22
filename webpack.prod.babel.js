import * as path from 'path';
import common from './webpack.common.babel';
import merge from 'webpack-merge';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default merge(common, {
  mode: 'production',

  output: {
    filename: '[name].[contentHash].bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: '[name].[contentHash].css' }),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ]
});
