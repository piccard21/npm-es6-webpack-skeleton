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
* sourcemap is created (inlinein dev-mode)


## Script

* npm run
  * start - bring up the development server. A index.html will be automatically created, where you are able to modify the template to your needs
  * watch - watch the src-directory
  * build - create dist/app.js in a minified version, where tree-shaking is triggered as well 
  * test - ...


## TODO
* css für dev-server
* dev-server eigene config????
* Variablen für server?
* Tests
 

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
