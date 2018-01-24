const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackDevConfig = require('./webpack.dev.config.js');
const config = require('../config/index');

const compiler = webpack(webpackDevConfig);
const server = new WebpackDevServer(compiler, webpackDevConfig.devServer);

server.listen(config.dev.port, 'localhost', (err) => {
    if (err) {
        console.log('\n\n[webpack-dev-server err]', err, '\n\n');
    }
});

compiler.plugin('done', (stats) => {
    
});

compiler.plugin('failed', (err) => {
    console.log('\n\n[webpack build err]', err, '\n\n');
});

compiler.plugin('compilation', compilation => {});