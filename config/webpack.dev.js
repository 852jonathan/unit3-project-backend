const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, '../src/index.jsx')
  ],
  output: {
    publicPath: '/',
    filename: '[name].[fullhash].js'
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '@': path.resolve(__dirname, '..', 'src')
    },
    extensions: ['.js', '.jsx']
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack', 'babel-loader', 'eslint-loader']
      }, {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }, {
        test: /\.(woff(2)?|ttf|eot|png|jpg|svg|gif)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_DOMAIN': JSON.stringify('http://localhost:3000')
      // 'process.env.PUBLIC_URL': JSON.stringify('http://localhost:8080')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/template.html'),
      filename: 'index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
    hot: true
  }
}
