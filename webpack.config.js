const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
 entry: "./index.js",
 output: {
   filename: '[name].[chunkhash].js',
   path: path.resolve(__dirname, 'dist')
 },

 resolve: {
   extensions: ['.js', '.es6']
 },
 watch : true,
 module: {

   loaders: [
     {
       test: [/\.js$/, /\.es6$/],
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
       }
     },
     {
       test: /\.scss$/,
       use: ExtractTextPlugin.extract('css-loader!sass-loader') //[ 'style-loader', 'css-loader', 'sass-loader' ]
     },
     {
       test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
       loader: 'url-loader',
       options: {
         limit: 10000
       }
     }

   ],

 },
 plugins: [
       new ExtractTextPlugin('public/style.css', {
           allChunks: true
       }),
       new HtmlWebpackPlugin({
            title: 'Caching',
            filename: 'index.html',
            template: './index.html'
          })
   ],
}
/*
As you can see above, we have added three keys to our first loader.
test — a regular expression that tests what kind of files to run through this loader. As you can see, we have added a regex to test all files with an es6 extension.
exclude — which files the loader should exclude /ignore. We have added the node_modules folder.
loader — the name of the loader we are going to use (babel-loader).
query — You can pass options to the loader by writing them as a query string or by using the query property as we have done above.
cacheDirectory — Default false. When set, the given directory will be used to cache the results of the loader. Future webpack builds will attempt to read from the cache to avoid needing to run the potentially expensive Babel recompilation process on each run
presets — lets us use the react and es2015 presets that were installed earlier.

El ejemplo de arriba demuestra como utilizar webpack con babel!!!!
*/
