/**
 * Created by basavarajy on 5/11/17.
 */
// Config specific to dev

const path = require('path')
const ASSET_PATH = path.resolve('src')
const APP_FILE_PATH = `${ASSET_PATH}/index.js`
const PUBLIC_PATH = path.resolve('')
const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 8083
const PROXY = `http://${HOST}:${PORT}`

const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
    mode: 'development',
    entry: [
        resolve(__dirname, '../src/index')
    ],
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname),
        publicPath: '/'
    },
    context: resolve(__dirname, '../src'),
    devServer: {
        inline: true,
        port: PORT,
        hot: true,
        stats: 'errors-only',
        historyApiFallback: true,
        contentBase: resolve(__dirname, '../assets'),
        publicPath: '/',
        clientLogLevel: 'info'
    },
    resolve: {
        extensions: ['.scss', '.js', '.jsx'], // How we tell webpack to discover the varying filetypes in our project
        alias: {
            constants: resolve(__dirname, '../src/constants/'),
            helpers: resolve(__dirname, '../src/helpers/'),
            'rf-components': resolve(__dirname, '../src/components/'),
            store: resolve(__dirname, '../src/store/'),
            style: resolve(__dirname, '../src/style/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [resolve(__dirname, '../src'), resolve(__dirname)],
                use: 'babel-loader?retainLines=true'
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                use: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Radio Flag',
            template: '../webpack/template.html'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'style.css',
            chunkFilename: '[id].css'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        // new BrowserSyncPlugin(
        //     // BrowserSync options
        //     {
        //         host: HOST,
        //         port: PORT,
        //         proxy: PROXY
        //     },
        //     // plugin options
        //     {
        //         // prevent BrowserSync from reloading the page
        //         // and let Webpack Dev Server take care of this
        //         reload: false
        //     }
        // ),
        // new BundleAnalyzerPlugin()
    ]
}

module.exports = config
