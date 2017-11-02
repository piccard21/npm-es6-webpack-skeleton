 // const webpack = require('webpack');
 const merge = require('webpack-merge');
 const path = require('path');

 const ExtractTextPlugin = require("extract-text-webpack-plugin");
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

 const common = require('./webpack.common.js');

 const libraryVarName = 'npmEs6WebpackSkeleton';
 const libraryTarget = 'umd';

 const extractCSSMIN = new ExtractTextPlugin({
     filename: '[name].css',
     allChunks: true
 });


 module.exports = {
     devtool: 'source-map',
     entry: { 
         "app.min": path.resolve(__dirname, 'src', 'index.js')
     },
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: '[name].js',
         library: libraryVarName,
         libraryTarget: libraryTarget
     },
     plugins: [
         extractCSSMIN,
         new UglifyJSPlugin({
             include: /\.js$/,
             sourceMap: true
         })
     ],
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
         }, {
           test: /\.scss$/i,
             include: path.resolve(__dirname, 'src/sass'),
             use: extractCSSMIN.extract([{
                 loader: 'css-loader',
                 options: {
                     minimize: true,
                     // importLoaders: 1
                 }
             }, 'sass-loader'])
         }, {
             test: /\.css$/i,
             include: path.resolve(__dirname, 'src/css'),
             use: extractCSSMIN.extract([{
                 loader: 'css-loader',
                 options: {
                     minimize: true,
                     // importLoaders: 1
                 }
             }])
         }]
     }
 };
 console.dir(module.exports);
 console.dir(module.exports.module.rules);