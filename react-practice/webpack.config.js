var webpack = require("webpack");
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var PROD = JSON.parse(process.env.PROD_ENV || '0');
console.log("production: ", PROD);
module.exports = {
   entry: {
       main: './jsx/main.jsx',
       register: './jsx/register.jsx',
       login: './jsx/login.jsx',
   },
   output: {
      filename: PROD ? './assets/js/[name].min.js' : './assets/js/[name].js',
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      loaders: [
         {
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2016', 'react']
            }
         },
         {
            test: /\.css$/,             
            loader: 'style-loader!css-loader',
         },
         {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
         },
      ]
   },
   resolve: {
        extensions: ['.js','.jsx','.json']
   },
   plugins: PROD ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ] : [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};