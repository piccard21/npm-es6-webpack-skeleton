'use strict'
// primary module-configuration
const libraryVarName = 'npmEs6WebpackSkeleton';
const libraryTarget = 'umd';
const sourcemap = (process.env.NODE_ENV === 'PRODUCTION') ? true : false;

// general vars
const paths = require('./paths.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');
const extractCSS = new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true
});

module.exports = {
    extractCSS: extractCSS,
    libraryVarName: libraryVarName,
    libraryTarget: libraryTarget,
    uglifyJSPlugin,
    // merge: merge,
    paths,
    env: process.env.NODE_ENV,
    sourcemap
}