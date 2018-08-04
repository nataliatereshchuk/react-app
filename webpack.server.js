var path = require('path');
var merge = require('webpack-merge');
var baseConfig = require('./webpack.base');

const webpackNodeExternals = require('webpack-node-externals');

const BUILD_DIR = path.resolve(__dirname, 'build');
const SERVER_DIR = path.resolve(__dirname, 'ServerApp');

var config = {
    entry: path.resolve(SERVER_DIR, 'Server.js'),
    output: {
        path: BUILD_DIR,
        filename: 'serverbundle.js'
    },
    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);