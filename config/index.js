const app = require('./app.js'); 
const {rules} = require('./rules.js')
const {output} = require('./output.js')
const {entry} = require('./entry.js')
const {plugins} = require('./plugins.js')

let options = {
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    }, 
    entry,
    plugins,
    output,
    module: {rules}
};

if (app.sourcemap) {
   options.devtool= 'source-map';
}

module.exports=options
console.info(module.exports ); 