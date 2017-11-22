[![Build Status](https://travis-ci.org/piccard21/npm-es6-webpack-skeleton.svg?branch=master)](https://travis-ci.org/piccard21/npm-es6-webpack-skeleton)

# npm-es6-webpack-skeleton

A skeleton for developing npm-modules in ES6 by using webpack with babel-loader.


## Features

* production, development & development-server mode
* minifying
	* Tree-Shaking
* hot development-server
    * Hot module replacement
    * webpage is automatically created
    * use of a template 
        * modify **index.ejs** for your needs
        * Bootstrap is preconfigured
* clean dist-directory before recompiling
* configuration-file in **config/app.js**
* if wanted:
  * create a sourcemap 
  * include lodash
  * use polyfills
* postcss & cssnext
* babel for converting ES6
* mocha & chai for testing
 
This package is bundled in a way that will achieve the following goals:
 
* setting the library name as **npm-es6-webpack-skeleton**
  * change the name in **package.json**
* exposing the library as a variable  **npmEs6WebpackSkeleton**.
  * change the constant **libraryVarName** in **config/app.js**
* access the library inside **Node.js**.

Also, the consumer should be able to access the library the following ways:

* **ES2015 module**
* **CommonJS module**
* **Global variable**, when included through script tag.

## Install

You can decide how to install the skeleton, via **npm** or **git**

### git

```sh
git clone https://github.com/piccard21/npm-es6-webpack-skeleton.git
cd npm-es6-webpack-skeleton
mv package.json.example package.json
npm i
 ```   


### npm 

```sh
npm init -y 
npm i npm-es6-webpack-skeleton 
mv node_modules/npm-es6-webpack-skeleton /WHERE/EVER/YOU/WANT/IT
cd /WHERE/EVER/YOU/WANT/IT
mv package.json.example package.json
npm i
 ```   


Now check if everything went ok. Herefor you've got some possibilities:

*  webpack-dev-server, with hot-module-replacemnt enabled
    * an html-page should open 
    * your bundle will be automatically injected
    * the bundle is notified when a change has happened

```sh 
npm start
```   
 

* development-mode:

```sh   
npm run dev
```   

 ... or better

```sh
npm run watch
```

* testing 

```sh
npm run dev
npm test
```



### Configuration

In **config/app.js** you have some options for basic configuration:

```
const libraryVarName = 'npmEs6WebpackSkeleton';
const libraryFileName = 'app';
const sourcemap = (process.env.NODE_ENV === 'PRODUCTION') ? true : false;
const htmlTitle = 'npm-es6-webpack-skeleton';
const includeLodash = true;
const enablePolyFill = false;
const libraryTarget = 'umd';
```


| variable   |      description     |
|:----------|:-------------| 
| libraryVarName |  the public variable-name you can reach the bundle, i.e. in a script-tag  |
| libraryFileName|    filename for the bundle   |  
| sourcemap | output sourcefiles for js & css |
| htmlTitle | the title of the development-server page |
| includeLodash | a really nice [utility-library](https://lodash.com/). If set to false, webpack adds it to [externals](https://webpack.js.org/configuration/externals/). |
| enablePolyFill | babel-polyfill allows you to use the full set of ES6 features beyond syntax changes. This includes features such as new built-in objects like Promises and WeakMap, as well as new static methods like Array.from or Object.assign. Without babel-polyfill, babel only allows you to use features like arrow functions, destructuring, default arguments, and other syntax-specific features introduced in ES6. |
| libraryTarget | **umd** is the default. See [here](https://webpack.js.org/guides/author-libraries/) for more information  |

## Usage

### Write your module

Open **src/index.js** and begin coding. Webpack will only bundle the code you are importing, which is also the case for your css & sass files, so you have explicitly ask for it. Here's an example:

```
// import essential libraries
import _ from 'lodash';
import * as mathLib from './lib/math.js';
import {
    cube,
    square,
    diag as d
} from './lib/math.js';
import printMe from './lib/print.js';
import * as pointLib from './lib/class.Point.js';

// import some css & sass
import './css/styles-01.css'; 
import './css/styles-02.css'; 
import './sass/sass.scss';  

// are we in development-mode?
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

// exports
export default function(x) {
    return 'I am the default function.';
}
export function hello() {
    return _.join(['Hello', 'world'], ' ');
};
export function print(num) {
    return printMe();
};
export function numFormatter(number, locale) {
    return number.toLocaleString(locale);
};
export const math = mathLib;
export const mathSelection = {
    cube,
    square,
    diag: d,
};
export const point = pointLib;
```

For easier development use **npm --watch** or **npm start**. The latter one starts the development-server and brings up a page, which you can modify for your needs in **src/template/index.ejs**.

**npm --watch** creates the files **app.css** && **app.js** in **dist/**, whereas **npm prod** creates the minfied versions as well.


### Import the module 

The module already works out of the box, so you can link it easily to an application, without publishing it:

```sh
cd /WHERE/EVER/YOU/WANT/IT
npm link
cd /PROJECT/WHICH/WILL/USE/THE/MODULE
npm link NAME-OF-YOUR-MODULE
```

Import ...

```
// ES2015 module import
import theDefault, * as ns from 'npm-es6-webpack-skeleton';

// CommonJS module require
var ns = require('npm-es6-webpack-skeleton');
```

... and use it

``` 
console.info("theDefault", theDefault());
console.info("ns.hello", ns.hello());
console.info("ns.print", ns.print());
console.info("ns.numFormatter", ns.numFormatter(21)); 
 
// math
console.log("ns.math.sqrt",ns.math.sqrt(9)); 
console.log("ns.math.square", ns.math.square(11)); 
console.log("ns.math.cube", ns.math.cube(11));
console.log("ns.math.diag", ns.math.diag(4, 3));


// mathSelection
console.log("ns.mathSelection.square", ns.mathSelection.square(21)); 
console.log("ns.mathSelection.cube", ns.mathSelection.cube(11));
console.log("ns.mathSelection.diag", ns.mathSelection.diag(11,22));


// pointLib
const point = new ns.point.Point();
const colorpoint = new ns.point.ColorPoint();
point.create(11,22)
colorpoint.create(55,88, "red");
console.log("point", point.toString());
console.log("colorpoint", colorpoint.toString());
```

The consumer also can use the library by loading it via a script tag:

```
<html>
...
<script src="your-public-place/app.js"></script>
<script> 
  console.info(npmEs6WebpackSkeleton.hello()); 
  console.info(window.npmEs6WebpackSkeleton.print()); 
</script>
...
</html>
```


## Scripts

* npm run
  * **start** - bring up the development server, where an index.html is automatically created. Modify the template, which you will find in **src/template/index.ejs**, so it fits your needs. The server is reachable under *localhost:8080*
  * **dev** - create dist/app.js, not minimized
  * **watch** - watch the src-directory
  * **prod** - create dist/app.js in a minified version, where tree-shaking is triggered as well 
  * **test** - mocha & chai tests 
  * **prepublish** - run tests before publishing
 

## Running tests

```sh
npm i 
npm run dev
npm test
```

## Author

**Andreas Stephan** 

## License

Copyright © 2017 [Andreas Stephan](https://cafe-serendipity.com)
Released under the MIT license. 
