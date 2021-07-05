const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        // loader: 'babel-loader',
        use: [
          {
            loader: path.resolve('path/to/loader.js')
          }
        ],
        // include: [path.resolve(__dirname, 'src')],
        exclude: [/node_modules/]
      }
    ]
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')]
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  // modules: ['node_modules'],
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Challenge Front-End Easynvest',
      template: path.join(__dirname, 'index.html')
    })
  ]
}
