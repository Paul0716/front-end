var webpack = require("webpack");
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
   entry: {
       main: './main.jsx'
   },
   output: {
      filename: './assets/js/[name].js',
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
   plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
   ]

};