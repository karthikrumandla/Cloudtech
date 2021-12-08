const path =require('path');
const webpack = require('webpack');
module.exports = {
  mode:'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { test: /\.css$/, use: {loader: "css-loader"} }
    ]
  },
  output:{
    path : path.join(__dirname,'dist'),
    filename: "bundle.js"
  },
  plugins: [
    new webpack.ProvidePlugin({
       "React": "react",
    }),
 ],
};
