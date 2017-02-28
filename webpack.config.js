require("./clearCache.js");

var CopyWebpackPlugin = require("copy-webpack-plugin");
var ImageminPlugin = require("imagemin-webpack-plugin").default;
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractSass = new ExtractTextPlugin({
    filename: "./[name].css"
    // disable: process.env.NODE_ENV === "development"
});


module.exports = {
  entry: ["./webpack/randomBackground.js", "./webpack/entry.js", "./webpack/analytics.js"],
  output: {
    path: "./assets/",
    filename: "/js/bundle.js"
  },
  plugins: [
    // Copy the images folder and optimize all the images
    new CopyWebpackPlugin([{
      from: "./_assets/",
      to: "./"
    }]),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    extractSass
  ],
  module: {
    rules: [{
      test: /\.scss$/,
      loaders: extractSass.extract({
        loader: [{
          loader: "css-loader"
        }, {
          loader: "postcss-loader"
        }, {
          loader: "sass-loader"
        }],
        // use style-loader in development
        fallbackLoader: "style-loader"
      })
    }
    , {
      test: /\.(woff|woff2|eot|ttf)$/,
      loader: 'url-loader?limit=10000'
    }
    ]
  }
};