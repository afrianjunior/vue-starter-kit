const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(vue)$/,
        exclude: /node_modules/,
        use: 'vue-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vue Patterns'
    }),
    new VueLoaderPlugin()
  ],
}