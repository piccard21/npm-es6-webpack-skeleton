const app = require('./app.js'); 
const {rules} = require('./rules.js')
const {output} = require('./output.js')
const {entry} = require('./entry.js')
const {plugins} = require('./plugins.js')

// general options
let options = { 
    entry,
    plugins,
    output,
    module: {rules}
};

if(!app.includeLodash) {
    options.externals= {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    };
}

// add sourcemap
if (app.sourcemap) {
   options.devtool= 'source-map';
}

// dev-server
if (app.env === 'DEVELOPMENT-SERVER') {
    options.devServer= {
        contentBase: app.paths.dist,
        hot: true
    }
}

module.exports=options;