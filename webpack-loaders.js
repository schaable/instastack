const webpack = require('webpack');

exports.devServer = function(options) {
	return {
		devServer:{
			historyApiFallback: true,
			hot: true,
			inline: true,
			stats: 'errors-only',
			host: options.host,
			port: options.port,
			contentBase: './dist',
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin({
				multistep: true
			})
		]
	};
}

exports.setupCSS = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          include: paths
        }
      ]
    }
  };
}
