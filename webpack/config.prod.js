const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: resolve(__dirname, '../src'),
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router-dom',
      'redux',
      'redux-thunk',
      'emotion'
    ]
  },
  optimization: {
    minimize: true
  },
  mode: 'production',
  output: {
    /*filename: '[name].[chunkhash].js',*/
    filename: '[name].js',
    path: resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.scss', '.js'], // How we tell webpack to discover the varying filetypes in our project
    alias: {
      style: resolve(__dirname, '../src/style/'),
      'rf-components': resolve(__dirname, '../src/components/'),
      'rf-store': resolve(__dirname, '../src/store/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [resolve(__dirname, '../src'), resolve(__dirname)],
        use: 'babel-loader'
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use:
            'file-loader?limit=10000&mimetype=application/font-woff&name=./fonts/[hash].[ext]'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use:
            'url-loader?limit=10000&mimetype=application/octet-stream&name=./fonts/[hash].[ext]'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader?name=./fonts/[hash].[ext]'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=image/svg+xml&name=./fonts/[hash].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: [resolve(__dirname, '../dist/assets'), resolve(__dirname)],
        use: 'file-loader?hash=sha512&digest=hex&name=./img/[hash].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'style.css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Radio Flag',
      template: 'webpack/template.html'
    })
  ]
};
