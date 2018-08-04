var path = require('path');
var merge = require('webpack-merge');
var baseConfig = require('./webpack.base');

const APP_DIR = path.resolve(__dirname, 'ClientApp');
const PUBLIC_DIR = path.resolve(__dirname, 'public');

var config = {
    entry: path.resolve(APP_DIR, 'Client.js'),
    devServer: {
        contentBase: PUBLIC_DIR,
        port: 9000,
        open: true
    },
    output: {
        path: PUBLIC_DIR,
        filename: 'bundle.js'
    },
    devtool: 'source-map'
};

module.exports = merge(baseConfig, config);