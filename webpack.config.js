const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // reduces load for big webapps

//export
module.exports = {
    entry: {
        main: './scripts/main.js',
        register: './scripts/register.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // will create this file in the proj
        filename: '[name].js'
    },
    module: {
        // define behaviour of libraries
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/, // test if the file is .js
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ], 
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            chunks: ['main'],
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './register.html',
            chunks: ['register'],
            filename: 'register.html',
        }),
        
    ],
    devServer: {
        static: './dist',
        port: 9000
    }
}