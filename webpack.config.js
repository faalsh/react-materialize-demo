var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    javascript: './index.js'
  },
  output: { 
    path: path.join(__dirname, 'src'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
        exclude: /node_modules/
      },
      {
        test: /\.css$/, 
        loader: "style-loader!css-loader", 
        exclude: /node_modules/
      },
      { 
        test: /\.png$/, 
        loader: "url-loader?limit=100000",
        exclude: /node_modules/, 
      },
      { 
        test: /\.jpg$/, 
        loader: "file-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        } 
      },

      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader:"url?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file" }

      
    ]
  },
  plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "root.jQuery": "jquery",
      Hammer: "hammerjs/hammer"
        })
        ]
};

// new webpack.ProvidePlugin({
//     $: "jquery",
//     jQuery: "jquery",
//     "window.jQuery": "jquery"
// })