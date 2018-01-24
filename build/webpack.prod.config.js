const path = require('path');
const os = require('os');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CompressionPlugin = require('compression-webpack-plugin');

const prodConfig = require('./webpack.base.config');
const config = require('../config');

prodConfig.module.rules.unshift({
    test: /\.less$/,
    use: ExtractTextPlugin.extract({
        fallback: 'vue-style-loader',
        use: ['css-loader', 'postcss-loader', 'less-loader']
    })
});

prodConfig.plugins = (prodConfig.plugins || []).concat([
    new CleanWebpackPlugin(['dist'], {
        root: path.join(__dirname, '../docs'),
        verbose: true,
        dry: false
    }),

    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(config.build.env)
        }
    }),

    new ExtractTextPlugin({
        filename: '[name].[contenthash:8].css'
    }),

    new OptimizeCSSPlugin({
        cssProcessorOptions: {
            safe: true
        },
        cssProcessor: require('cssnano'),
        assetNameRegExp: /\.less|\.css$/g
    }),

    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: ({ resource }) => (
            resource &&
            resource.indexOf('node_modules') >= 0 &&
            resource.match(/\.js$/)
        )
    }),

    // gzip
    new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|html|less)$/,
        threshold: 10240,
        minRatio: 0.8
    }),

    new ParallelUglifyPlugin({
        workerCount: os.cpus().length,
        cacheDir: '.cache/',
        sourceMap: true,
        uglifyJS: {
            compress: {
                warnings: false,
                /* eslint-disable camelcase */
                drop_debugger: true,
                drop_console: true
            },
            mangle: true
        }
    }),

    new webpack.optimize.ModuleConcatenationPlugin(),
    new WebpackMd5Hash()
]);

module.exports = Object.assign({}, prodConfig, {
    entry: {
        app: path.resolve(__dirname, '../docs/entry.js')
    },
    output: {
        filename: '[name].[chunkhash:8].js',
        path: config.build.assetsRoot,
        publicPath: config.build.assetsPublicPath,
        sourceMapFilename: '[file].map',
        chunkFilename: '[name].[chunkhash:8].js'
    },
    devtool: 'source-map'
});
