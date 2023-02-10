const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|jpeg|gif)$/i,
        use:[
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
              context: 'src',
            }
          }
        ]
      },
      
    ],
  },
  
};