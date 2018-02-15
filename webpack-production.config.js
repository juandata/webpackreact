var WebpackStripLoader = require('strip-loader');
var devConfig = require('./webpack.config.js');
var stripLoader = {
 test: [/\.js$/, /\.es6$/],
 exclude: /node_modules/,
 loader: WebpackStripLoader.loader('console.log')
}
devConfig.module.loaders.push(stripLoader);
module.exports = devConfig;

/*This runs webpack with the config flag, letting us specify a custom config file. -p minifies the code for production.
Open bundle.js. If you do a find and replace you will notice there are no console.log statements in our bundle.*/
