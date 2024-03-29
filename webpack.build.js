const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './static',
		watchContentBase: true,
	},
	optimization: {
		namedModules: true,
		namedChunks: true,
		moduleIds: 'named',
		chunkIds: 'named',
	},
});
