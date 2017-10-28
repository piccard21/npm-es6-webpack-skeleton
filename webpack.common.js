 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const libraryName = 'npmEs6WebpackSkeleton';
 module.exports = {
     entry: {
         app: './src/index.js'
     },
     plugins: [
         new CleanWebpackPlugin(['dist']),
         new HtmlWebpackPlugin({
            title: 'npm-es6-webpack-skeleton',
            template: path.resolve(__dirname, 'src', 'index.ejs'),
        })
     ],
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'app.js',
         library: libraryName,
         libraryTarget: 'umd'
     }
 };