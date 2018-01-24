let path = require('path');

module.exports = {
    context: path.resolve('src'),
    entry: './Client.ts',
    output: {
        path: path.resolve('dist/'),
        //publicPath: '/public/js/',
        filename: 'bundle.js'
    },
    watch: true,
    watchOptions: {
        poll: 2000
    },
    devServer: {
       contentBase: './dist',
       port: 9080
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    }
}