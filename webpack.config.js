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
      favicon: './client/src/assets/favicon.png',
      templateContent: `
      <!DOCTYPE html>
      <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Piraeus</title>
          </head>
          <body>
              <div id="root"></div>
          </body>
      </html>
  `,
    }),
    // new webpack.DefinePlugin({
    //     "process.env": {
    //         AUTH_SECRET: JSON.stringify(process.env.AUTH_SECRET),
    //     },
    // }),
  ],
};
