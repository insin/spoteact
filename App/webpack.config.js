var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './core/index'
  ],
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'app.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style!css?-minimize'},
      {test: /\.(gif|jpe?g|png|otf|eot|svg|ttf|woff|woff2).*$/, loader: 'url?limit=8192'}
    ]
  }
}
