
"use strict";

const path = require('path');
const webpack = require('webpack');

require('dotenv').load();

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  css: path.join(__dirname, 'dist/css')
};

const config = {
	entry: {
		app: PATHS.src
	},
	output: {
		path: PATHS.dist,
		filename: 'bundle.js'
	},
	module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }]
		},
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader'],
			include: PATHS.css
		}]
  },
	resolve: {
    extensions: ['.js', '.jsx']
	},
	devtool: 'source-map',
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			warningsFilter: function(filename) {
				return /^node_modules\/.*\.js$/.test(filename);
			},
			sourceMap: true,
			compress: {
				warnings: true,
			},
			mangle: false,
			beautify: true,
			comments: false
		})
	],
};

module.exports = config;
