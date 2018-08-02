var config = {
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