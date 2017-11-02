 const webpack = require('webpack');
 const merge = require('webpack-merge');
 const path = require('path');

 const ExtractTextPlugin = require("extract-text-webpack-plugin");
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

 const common = require('./webpack.common.js'); 

 const libraryVarName = 'npmEs6WebpackSkeleton';
 const libraryTarget = 'umd';

 const extractCSSMIN = new ExtractTextPlugin({
     filename: 'app.min.css',
     allChunks: true
 });

 const multi = require("multi-loader");


 


 module.exports = merge(common, {
     // devtool: 'source-map',
     plugins: [
         extractCSSMIN,
         new UglifyJSPlugin({
             include: /\.min\.js$/,
             sourceMap: true,
             // minimize: true
         }),
         new webpack.DefinePlugin({
             'process.env': {
                 'NODE_ENV': JSON.stringify('production')
             }
         })
     ],
     module: {
         rules: [{ 
             // test: /\.scss$/i,
             // include: path.resolve(__dirname, 'src/sass'),
             // use: extractCSSMIN.extract(['css-loader', 'sass-loader'])
         // }, {
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
 });


console.info(module.exports.module.rules);