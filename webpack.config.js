const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'client', 'src', 'index.jsx'),
    output: {
        path: path.join(__dirname, 'client', 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Piraeus",
            favicon: './client/src/assets/favicon.png',
        }),
        // new webpack.DefinePlugin({
        //     "process.env": {
        //         AUTH_SECRET: JSON.stringify(process.env.AUTH_SECRET),
        //     },
        // }),
    ],
};
