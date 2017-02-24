module.exports = {
  entry: ['./webpack/entry.js', "./webpack/analytics.js"],
  output: {
    path: './js/',
    filename: 'bundle.js'
  },
  // module: {
  // loaders: [
  //   {
  //     test: /\.jsx?$/,
  //     exclude: /(node_modules)/,
  //     loader: 'babel', // ‘babel-loader’ is also a legal name to reference
  //     query: {
  //       presets: ['react', 'es2015']
  //     }
  //   }
  //   ]
  // }
};