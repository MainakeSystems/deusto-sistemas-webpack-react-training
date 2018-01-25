let path = require('path');
let webpack = require('webpack');
let extractTextWebpackPlugin = require('extract-text-webpack-plugin');
let htmlWebpackPlugin = require('html-webpack-plugin');
let cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve('src'),
    entry: {
        styles: './css/main.scss',
        //app: './app.js',
        indexJs: [
            './index/index.js'
        ],
        contactJs: [
            './contact/contact.js'
        ],
        vendorJs: [
            '../node_modules/bootstrap/dist/js/bootstrap.min.js'
        ],
        vendorStyles: [
            '../node_modules/bootstrap/dist/css/bootstrap.min.css'
        ]
    },
    output: {
        path: path.resolve('dist/'),
        filename: '[hash].[name].js',
        publicPath: '/'
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
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                use: extractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: extractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
                //loader: ['style-loader', 'css-loader' ,'sass-loader']
            },
            {
                test: /\.svg$/,
                loader: 'url-loader'
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url-loader'
            },
            {
                test: /\.ttf$/,
                loader: 'url-loader'
            },
            {
                test: /\.eot$/,
                loader: 'file-loader'
            },
            {
                test: /\.(gif|png|jpg|jpeg)$/,
                loader: 'file-loader',
                options: {
                    query: {
                        name: 'assets/[name].[ext]'
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins: [
        new cleanWebpackPlugin(['./dist'], {
            verbose: true,
            dry: false,
            watch: true
        }),
        new extractTextWebpackPlugin({
            filename: '[hash].[name].css',
            allChunks: true
        }),
        new htmlWebpackPlugin({
            chunks: ['indexJs', 'vendorJs', 'vendorStyles', 'styles'],
            filename: 'index.html',
            template: './index/index.html',
            hash: true
        }),
        new htmlWebpackPlugin({
            chunks: ['contactJs', 'vendorJs', 'vendorStyles', 'styles'],
            filename: 'contact.html',
            template: './contact/contact.html',
            hash: true
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
}