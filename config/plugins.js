'use strict'
const app = require('./app.js')
const webpack = require('webpack');
const plugins = [
    app.extractCSS
];
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const pathsToClean = ['dist'];
const cleanOptions = {
    root: app.paths.root,
    verbose: true,
    dry: false
}

if (app.env === 'DEVELOPMENT') {
    plugins.push(new cleanWebpackPlugin(app.paths.dist, cleanOptions));
}

if (app.env === 'PRODUCTION') {
    let uglify = new app.uglifyJSPlugin({
        include: /\.js$/,
        sourceMap: true
    });
    plugins.push(uglify);
}

if (app.env === 'DEVELOPMENT-SERVER') {
    let htmlPlugin = new htmlWebpackPlugin({
        title: 'npm-es6-webpack-skeleton',
        template: app.paths.path.resolve(app.paths.src, 'template', 'index.ejs'),
    });
    plugins.push(new cleanWebpackPlugin(app.paths.dist, cleanOptions), htmlPlugin, new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin());
}

module.exports = {
    plugins
}