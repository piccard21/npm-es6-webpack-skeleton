const app = require('./app.js'); 
const {rules} = require('./rules.js')
const {output} = require('./output.js')
const {entry} = require('./entry.js')
const {plugins} = require('./plugins.js')

module.exports = {
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    },
    // devtool: (app.env === 'PRODUCTION') ? 'source-map' : 'nosources-source-map',
    entry,
    plugins,
    output,
    module: {rules},
}


 // console.info(module.exports ); 