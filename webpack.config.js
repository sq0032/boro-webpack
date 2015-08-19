var path = require('path');

module.exports = {
    entry: "./js/app.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, loader: "babel?stage=1" }
        ]
    },
    resolve: {
      root: path.resolve('./'),
      alias: {
        jquery_bower: "bower_components/jquery/dist/jquery.js",
      }
    }
};