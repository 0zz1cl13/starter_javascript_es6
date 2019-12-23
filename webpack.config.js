module.exports = {
  entry: './src/main.js', // arquivo principal com es6 >
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: __dirname + '/public',
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