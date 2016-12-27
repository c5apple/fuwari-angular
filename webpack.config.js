'use strict';
let path = require('path');
let webpack = require('webpack');
let ngtools = require('@ngtools/webpack');

let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');

// let helpers = require('./helpers');


module.exports = {
  entry: {
    'bootstrap': './src/main.ts',
    'bootstrap.aot': './src/main.aot.ts'
  },

  output: {
    path: './bin',
    filename: '[name].bundle.js',
    sourceMapFilename: '[file].map'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=images/[name].[hash].[ext]'
      },
      {
        test: /\.scss$/,
        loader: 'raw-loader'
      }
    ]
  },

  plugins: [
    new ngtools.AotPlugin({
      tsConfigPath: './src/tsconfig.json',
      entryModule: './src/app/app.module#AppModule'
    }),
    // new webpack.ProgressPlugin(),
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      path.join(process.cwd(), 'src')
    )
  ],

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.ts', '.js']
  },

  devtool: "#source-map",

  performance: { hints: false }
};