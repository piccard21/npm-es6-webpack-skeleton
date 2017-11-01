 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const libraryVarName = 'npmEs6WebpackSkeleton';
 const libraryTarget = 'umd';
 module.exports = {
     entry: {
         app: path.resolve(__dirname, 'src', 'index.js'),
     },
     plugins: [
         new CleanWebpackPlugin(['dist'])
     ],
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'app.js',
         library: libraryVarName,
         libraryTarget: libraryTarget
     },
     module: {
         rules: [{
             test: /\.js$/,
             exclude: /(node_modules|bower_components)/,
             use: {
                 loader: 'babel-loader',
                 options: {
                     presets: ['env']
                 }
             }
         }]
     }
 };