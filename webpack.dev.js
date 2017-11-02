 const path = require('path');
 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const webpack = require('webpack');

console.info("----",process.env.NODE_ENV);


 module.exports = merge(common, {
     devtool: 'inline-source-map',
     devServer: {
         contentBase: './dist',
         hot: true
     },
     plugins: [
         new webpack.DefinePlugin({
             'process.env': {
                 'NODE_ENV': JSON.stringify('development')
             }
         })
     ]
 });