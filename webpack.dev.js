 const path = require('path');
 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const webpack = require('webpack');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 


 module.exports = merge(common, {
     plugins: [
         new CleanWebpackPlugin(['dist']),
     ]
 });