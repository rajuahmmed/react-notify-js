'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        path.join(__dirname, 'example/src/App.js')
    ],
    output: {
        path: path.join(__dirname, 'example/dist/'),
        filename: 'app.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}