[![Build Status](https://travis-ci.org/piccard21/npm-es6-webpack-skeleton.svg?branch=develop)](https://travis-ci.org/piccard21/npm-es6-webpack-skeleton)

# npm-es6-webpack-skeleton

A skeleton for developing npm-modules in ES6 by using webpack with babel-loader.

## Install

Install with [npm](https://www.npmjs.com/)

## Usage
```sh
    npm init -y 
    npm i npm-es6-webpack-skeleton 
    mv node_modules/npm-es6-webpack-skeleton /WHERE/EVER/YOU/WANT/IT
    cd PLACE/IT/WHEREVER/YOU/WANT
    mv package.json.example package.json
    vim package.json
    npm install
 ```   


## Features

* Production & Development mode
* Minifying
	* Tree-Shaking
* Hot development-server
	* Hot module replacement
	* index.html automatically created
	* use of a template 
		* modify **index.ejs** for your needs
* clean dist-directory before recompiling
* sourcemap (inline in dev-mode)
* Babel for converting ES6


## Access 
This package is bundled in a way that will achieve the following goals:
 
* Setting the library name as **npm-es6-webpack-skeleton**.
* Exposing the library as a variable called **npmEs6WebpackSkeleton**.
* Being able to access the library inside **Node.js**.

Also, the consumer should be able to access the library the following ways:

* **ES2015 module**. i.e. import * npmEs6WebpackSkeleton from 'npm-es6-webpack-skeleton'.
* **CommonJS module**. i.e. require('npm-es6-webpack-skeleton').
* **Global variable** when included through script tag.

You can expose the library in the following ways, by modifying the **[libraryTarget](https://webpack.js.org/configuration/output/#output-librarytarget)** in **webpack.common.js**:

* **Variable**: as a global variable made available by a script tag (libraryTarget:'var').
* **This**: available through the this object (libraryTarget:'this').
* **Window**: available trough the window object, in the browser (libraryTarget:'window').
* **UMD**: available after AMD or CommonJS require (libraryTarget:'umd'). This is the default in the package.

The usage specification for the library use will be as follows:

```
// ES2015 module import
import * as npmEs6WebpackSkeleton from 'npm-es6-webpack-skeleton';

// CommonJS module require
var npmEs6WebpackSkeleton = require('npm-es6-webpack-skeleton');
```


``` 
// ES2015 and CommonJS module use
npmEs6WebpackSkeleton.wordToNum('Two');
 
// AMD module require
require(['npmEs6WebpackSkeleton'], function (npmEs6WebpackSkeleton) {
  // AMD module use
  npmEs6WebpackSkeleton.wordToNum('Two');
});
```

The consumer also can use the library by loading it via a script tag:

```
<html>
...
<script src="https://unpkg.com/npm-es6-webpack-skeleton"></script>
<script>
  // ...
  // Global variable
  npmEs6WebpackSkeleton.cube(5)
  // Property in the window object
  window.npmEs6WebpackSkeleton.printMe()
  // ...
</script>
</html>
```


## Scripts

* npm run
  * **start** - bring up the development server. A index.html is automatically created, where you are able to modify the template to your needs. The server is reachable at *localhost:8080*
  * **watch** - watch the src-directory
  * **build** - create dist/app.js in a minified version, where tree-shaking is triggered as well 
  * **test** - mocha & chai tests 
 

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```
 

## Author

**Andreas Stephan**

+ [github/piccard21](https://github.com/piccard21) 

## License

Copyright © 2017 [Andreas Stephan](https://github.com/piccard21)
Released under the MIT license. 
