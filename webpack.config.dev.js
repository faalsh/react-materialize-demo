var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  devTool: 'source-map',
  module: {
    loaders: [
      {
        test: /.js?$/,
        loaders: ['babel?presets[]=es2015,presets[]=react'],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
        exclude: /node_modules/
      },
      {
        test: /\.ico$/,
        loader: "file?name=[name].[ext]",
        exclude: /node_modules/
      },
      {
        test: /\.css$/, 
        loader: "style!css", 
        exclude: /node_modules/
      },
      { 
        test: /\.png$/, 
        loader: "url?limit=100000",
        exclude: /node_modules/, 
      },
      { 
        test: /\.jpg$/, 
        loader: "file",
        exclude: /node_modules/,
      },
      {
        test: /\.jsx$/,
        loaders: ['babel?presets[]=es2015,presets[]=react'],
        exclude: /node_modules/,
      },

      { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader:"url?limit=10000&mimetype=application/font-woff" 
      },
      { 
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "file" 
      },
      { 
        test: /\.json$/, 
        loader: "json-loader",
        exclude: /node_modules/,
      }

      
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
