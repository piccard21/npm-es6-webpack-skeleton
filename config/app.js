'use strict'
const libraryVarName = 'npmEs6WebpackSkeleton';
const libraryTarget = 'umd';
const paths = require('./paths.js')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const extractCSS = new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true
});

module.exports = {
    extractCSS: extractCSS,
    libraryVarName: libraryVarName,
    libraryTarget: libraryTarget,
    uglifyJSPlugin,
    cleanWebpackPlugin,
    // merge: merge,
    paths,
    env: process.env.NODE_ENV
}