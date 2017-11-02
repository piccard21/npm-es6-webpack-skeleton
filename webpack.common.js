 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const ExtractTextPlugin = require("extract-text-webpack-plugin");
 const libraryVarName = 'npmEs6WebpackSkeleton';
 const libraryTarget = 'umd';
 const extractCSS = new ExtractTextPlugin({
     filename: 'app.css',
     allChunks: true
 });
 module.exports = {
     entry: {
         "app": path.resolve(__dirname, 'src', 'index.js'),
         "app.min": path.resolve(__dirname, 'src', 'index.js'),
     },
     plugins: [
         new CleanWebpackPlugin(['dist']),
         extractCSS
     ],
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: '[name].js',
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
         }, {
             test: /\.scss$/i,
             include: path.resolve(__dirname, 'src/sass'),
             use: extractCSS.extract(['css-loader', 'sass-loader'])
         }, {
             test: /\.css$/i,
             include: path.resolve(__dirname, 'src/css'),
             use: extractCSS.extract([{
                 loader: 'css-loader',
                 options: {
                     minimize: false,
                     // importLoaders: 1
                 }
             }])
         }]
     }
 };