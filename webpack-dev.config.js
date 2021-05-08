const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const portfinder = require('portfinder')

portfinder.basePort = 3000

const parseArgs = (env) => {
  const defaultProxyPort = env.PROXY || '8000'
  const args = require('yargs').default('proxy', defaultProxyPort).argv
  return args
}

const config = (env, argv, port, args) => ({
  mode: 'development',
  devtool: 'eval-source-map',
  resolve: {
    modules: [
      'node_modules',
      'src',
    ],
    extensions: ['.js', '.jsx'],
  },
  target: 'web',
  entry: {
    main: path.resolve(__dirname, './src/js/main-app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].js',
  },
  devServer: {
    compress: true,
    port,
    open: true,
    hot: true,
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    overlay: {
      errors: true,
      warnings: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          emitWarning: true,
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/env', {
                useBuiltIns: 'usage',
                corejs: 3,
                targets: {
                  browsers: 'last 2 versions',
                },
              }],
              '@babel/preset-react',
            ],
            plugins: [
              '@babel/proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread',
            ],
          },
        },
      },
      {
        test: /.*\.s?css$/,
        sideEffects: true,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[contenthash].[ext]',
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /open-graph\.jpg$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'images/[name].[contenthash].[ext]',
          },
        }],
      },
      {
        test: /open-graph\.jpg$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]',
          },
        }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      chunks: ['main'],
    }),
  ],
})

module.exports = (env, argv) =>
  portfinder.getPortPromise()
    .then(port => config(env, argv, port, parseArgs(env)))
