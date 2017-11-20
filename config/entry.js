'use strict'
const app = require('./app.js')
const appPath = app.paths.path.resolve(app.paths.src, 'index.js');

let entry= {};
let key = (app.env === 'PRODUCTION') ? app.libraryFileName + '.min' : app.libraryFileName;

entry[key] = [];

if (app.enablePolyFill) {
	entry[key].push('babel-polyfill');
}
entry[key].push(appPath);

module.exports = {
    entry
}