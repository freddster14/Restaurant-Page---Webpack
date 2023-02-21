const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
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
        test: /\.(png|jpe?g|jpeg|gif|svg)$/i,
        use:[
          {
            loader: 'file-loader',
            options: {
              name: 'Images/[name].[ext]',
              context: 'src',
            }
          }
        ]
      },
      
    ],
  },
  
};