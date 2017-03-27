var webpack = require("webpack");
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  entry: {
    bundle: './main.js',
  },
  output: {
    filename: '[name].js'
  },
  module: {
      loaders:[
        {
              test: /\.js[x]?$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
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
    extensions: ['','.jsx','.json']
  },
  plugins: [
      new uglifyJsPlugin(
          {
              compress: {
                  warnings: true,
              }
          }
      ),
      new webpack.ProvidePlugin(
          {
            $: "jquery",
            jQuery:"jquery",
            "window.jQuery": "jquery",
          }
      )
  ]
};