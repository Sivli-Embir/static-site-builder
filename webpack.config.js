const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractStyles = new ExtractTextPlugin('app.css');
const extractFonts = new ExtractTextPlugin('fonts.css');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './app.js',
  },
  module: {
    rules: [
      {
        test: /app\.css/,
        use: extractStyles.extract({
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            'postcss-loader',
          ],
        }),
      },
      {
        test: /font\.css/,
        use: extractFonts.extract({
          use: 'css-loader',
        }),
      },
      {
        test: /\.(ttf|woff|woff2|svg)$/,
        use: ['url-loader'],
      },
      {
        test: /\.(svg)$/,
        use: ['svg-url-loader'],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'docs/assets'),
    filename: '[name].bundle.js',
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  plugins: [
    new CleanWebpackPlugin(['./docs/assets']),
    extractStyles,
    extractFonts,
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
