//var glob = require("glob");

module.exports = {
    //entry: glob.sync('./src/*.js'),
    //entry: './src/app.js',
    entry: {
        //Contact Page
        './dist/bundle1': [
            './src/login.js',
            './src/contact.js'
        ],
        //Login Page
        './dist/bundle2': [
            './src/login.js'
        ]
    },
    output: {
        //filename: './dist/bundle.js'
        filename: '[name].js'
    },
    watch: true,
    watchOptions: {
        poll: 2000
    }
}