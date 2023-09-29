const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
   entry: path.resolve(__dirname, 'index.js'),
   devtool: 'source-map',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js'
   },
   mode: 'development',
   plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
         template: 'index.html'
      }),
      new CopyWebpackPlugin({
         patterns: [
            {
               from: path.resolve(__dirname, './src/img'),
               to: path.resolve(__dirname, './dist/img'),
            }
         ]
      })
   ],
   devServer: {
      static: {
         directory: path.join(__dirname, "dist"),
      },
      hot: true
   },
   module: {
      rules: [
         {
            test: /\.scss$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
         },
         {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset/resource',
            generator: {
               filename: 'img/[name][ext]',
            },
         },
         {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            generator: {
               filename: 'fonts/[name][ext]',
            },
         },
      ],
   },
   optimization: {
      minimizer: [
         '...',
         new CssMinimizerPlugin(),
      ],
   },
   performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
   },
};