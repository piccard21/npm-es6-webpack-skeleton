 const path = require('path');
 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const webpack = require('webpack');
 module.exports = merge(common, {
     devtool: 'inline-source-map',
     devServer: {
         contentBase: './dist',
         hot: true
     },
     plugins: [
         new HtmlWebpackPlugin({
             title: 'npm-es6-webpack-skeleton',
             template: path.resolve(__dirname, 'src/template', 'index.ejs'),
         }),
         new webpack.NamedModulesPlugin(),
         new webpack.HotModuleReplacementPlugin(),
         new webpack.DefinePlugin({
             'process.env': {
                 'NODE_ENV': JSON.stringify('development')
             }
         })
     ]
 });