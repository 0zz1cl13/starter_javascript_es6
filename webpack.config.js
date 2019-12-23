module.exports = {
  entry: ['@babel/polyfill', './src/main.js'], // arquivo principal com es6 >
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: __dirname + '/public',
    watchOptions: {
      poll: true
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }  
    ],
  }
}