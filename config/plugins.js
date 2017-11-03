'use strict'
const app = require('./app.js')
const plugins = [
    app.extractCSS
];
if (app.env === 'DEVELOPMENT') {
    let pathsToClean = ['dist']
    let cleanOptions = {
        root: app.paths.root,
        verbose: true,
        dry: false
    }
    plugins.push(new app.cleanWebpackPlugin([app.paths.dist], cleanOptions));
}
if (app.env === 'PRODUCTION') {
    const uglify = new app.uglifyJSPlugin({
        include: /\.js$/,
        sourceMap: true
    });
    plugins.push(uglify);
}
module.exports = {
    plugins
}