'use strict'
// primary module-configuration
const libraryVarName = 'npmEs6WebpackSkeleton';
const sourcemap = (process.env.NODE_ENV === 'PRODUCTION') ? true : false;
const htmlTitle = 'npm-es6-webpack-skeleton';
const includeLodash = true;
const libraryTarget = 'umd';

// general vars
const paths = require('./paths.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true
});

module.exports = {
    extractCSS: extractCSS,
    libraryVarName: libraryVarName,
    libraryTarget: libraryTarget,
    paths,
    env: process.env.NODE_ENV,
    sourcemap,
    htmlTitle,
    includeLodash
}