 // const webpack = require('webpack');
 const merge = require('webpack-merge');
 const path = require('path');

 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

 const common = require('./webpack.common.js');

 const libraryVarName = 'npmEs6WebpackSkeleton';
 const libraryTarget = 'umd';

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSSMIN = new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true
});


const rules = require('./webpack.rules.js')
 

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
     module: rules 
 };