const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  resolve: {
    modules: [
      'node_modules',
      'src',
    ],
    extensions: ['.js', '.jsx'],
  },
  entry: {
    main: path.resolve(__dirname, './src/js/main-app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
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
              ['@babel/preset-env', {
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
              'transform-react-remove-prop-types',
            ],
          },
        },
      },
      {
        test: /.*\.s?css$/,
        sideEffects: true,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        }, {
          loader: 'resolve-url-loader',
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        }],
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
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      chunks: ['main'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CleanWebpackPlugin(),
  ],
}
