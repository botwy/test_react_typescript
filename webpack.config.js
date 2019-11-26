const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './assets/fonts'
                    }
                }]
            },
            {
                test: /\.(gif|jpg|png)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './assets/images'
                }
            }
        ]
    },
    resolve: { extensions: [".ts", ".tsx", ".js"] },
    output: {
        path: path.resolve(__dirname, "public/"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};