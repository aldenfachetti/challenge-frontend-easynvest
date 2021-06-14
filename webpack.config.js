const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isProd = process.env.NODE_ENV !== 'production'

const config = {
  mode: 'development',
  devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    inline: false,
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    port: 8000
  },
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Challenge Front-End Easynvest'
    })
  ]
}

module.exports = config
