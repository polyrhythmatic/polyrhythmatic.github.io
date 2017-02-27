module.exports = {
  entry: ['./webpack/entry.js', "./webpack/analytics.js"],
  output: {
    path: './js/',
    filename: 'bundle.js'
  },
  // module: {
  //     rules: [{
  //         test: /\.scss$/,
  //         use: [{
  //             loader: "style-loader" // creates style nodes from JS strings
  //         }, {
  //             loader: "css-loader" // translates CSS into CommonJS
  //         }, {
  //             loader: "sass-loader" // compiles Sass to CSS
  //         }]
  //     }]
  // }
};