let WebpackStripLoader = require('strip-loader');
let devConfig = require('./webpack.config.js');

let stripLoader = {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: WebpackStripLoader.loader('console.log')
}

devConfig.module.rules.push(stripLoader);

module.exports = devConfig;