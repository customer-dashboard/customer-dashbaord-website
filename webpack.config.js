const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');



const babelLoader = {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env',
               ['@babel/preset-react', {'runtime': 'automatic'}]]
          }
        }
      }
    ]
};

const resolve = {
  extensions: ['.js', '.jsx ']
}


const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js'
  },
  module:babelLoader,
  Plugin: [
    new  htmlWebpackPlugin({
      template: `${__dirname}/client/index.html`
    })
  ]

}

const clientConfig = {
  target: 'node',
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath:'/static',
    filename:'App.js'
  },
  module:babelLoader,
  Plugin: [
    new  htmlWebpackPlugin({
      template: `${__dirname}/client/index.html`
    })
  ],
  resolve

}


module.exports =[serverConfig, clientConfig]