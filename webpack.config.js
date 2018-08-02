var path = require('path');

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
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        'react',
                        'env',
                        'es2015',
                        'stage-2'
                    ]
                }
            }
        ]
    }
};

module.exports = config;