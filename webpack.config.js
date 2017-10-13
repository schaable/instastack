
"use strict";

const path = require('path');
const merge = require('webpack-merge');

const parts = require('./webpack-loaders');

const webpack = require('webpack');
require('dotenv').load();

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  css: path.join(__dirname, 'dist/css')
};

const common = {
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
    }]
  },
	resolve: {
    extensions: ['.js', '.jsx']
  }
};

let config;

switch(process.env.NODE_ENV) {
	case 'production':
		config = merge(
		  common,
      {
        devtool: 'source-map'
      },
      parts.setupCSS(PATHS.css)
	  );
		break;
	default:
		config = merge(
			common,
			{
	      devtool: 'eval-source-map'
	    },
	    parts.setupCSS(PATHS.css),
			parts.devServer({
				host: process.env.host,
				port: 3000
			})
		);
}

module.exports = config;
