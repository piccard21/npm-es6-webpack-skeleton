# npm-es6-webpack-skeleton

A skeleton for developing npm-modules in ES6 by using webpack with babel-loader.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i npm-es6-webpack-skeleton --save
```  

## Features

* Production & Development mode
* Minifying
	* Tree-Shaking
* Hot development-server
	* Hot module replacement
	* index.html automatically created
	* use of a template 
* clean dist-directory before recompiling
* sourcemap is created (inline in dev-mode)

## Access 
This package is bundled in a way that will achieve the following goals:

* Without bundling lodash, but requiring it to be loaded by the consumer using externals.
* Setting the library name as webpack-numbers.
* Exposing the library as a variable called webpackNumbers.
* Being able to access the library inside Node.js.

Also, the consumer should be able to access the library the following ways:

* ES2015 module. i.e. import webpackNumbers from 'webpack-numbers'.
* CommonJS module. i.e. require('webpack-numbers').
* Global variable when included through script tag.


## Script

* npm run
  * **start** - bring up the development server. A index.html will be automatically created, where you are able to modify the template to your needs. The server is reachable at *localhost:8080*
  * **watch** - watch the src-directory
  * **build** - create dist/app.js in a minified version, where tree-shaking is triggered as well 
  * **test** - ...


## TODO
* css für dev-server
	* dev-server eigene config????
	* Variablen für server?
* Tests
* Babel
* Authoring
* library_target
 

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
