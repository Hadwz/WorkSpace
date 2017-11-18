var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
	loaders: utils.cssLoaders({
		sourceMap: isProduction
			? config.build.productionSourceMap
			: config.dev.cssSourceMap,
		extract: isProduction
	}),
	postcss: [
		//自动添加前缀
		require('autoprefixer')({
			browsers: ['iOS >= 7', 'Android >= 4.1']
		}),
		require('postcss-px-to-viewport')({
			viewportWidth: 750
		}),
		require('postcss-write-svg')({ /* options */ })
	]
}
