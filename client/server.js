var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

module.exports = function (PORT) {
  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    contentBase: __dirname,
    proxy: {
      "/api/*" : `http://localhost:${PORT - 1}`,
      "/css/*" : `http://localhost:${PORT - 1}`,
      "/js/*" : `http://localhost:${PORT - 1}`
    },
  }).listen(PORT, '0.0.0.0', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Listening at localhost:'+PORT);
  });
}
