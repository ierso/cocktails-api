const path = require('path');
const NodemonPlugin = require( 'nodemon-webpack-plugin' );
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    entry: {
      app: './app.js',
    },
    output: {
      filename: 'app.bundle.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'commonjs2',
    },
    plugins: [
        new NodemonPlugin(),
    ],
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            }
          }
        ],
    }
};