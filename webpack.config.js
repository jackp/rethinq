/**
 * Webpack Configuration
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {

	// Set default options
	const options = Object.assign({
		mode: 'development',
	}, env);

	return {
		entry: {
			main: './src/main.js',
		},

		output: {
			filename: '[name].[hash].js',
			path: path.resolve(__dirname, 'dist'),
		},

		resolve: {
			extensions: ['.js', '.vue', '.json'],
			modules: [
				path.resolve(__dirname, 'node_modules'),
				path.resolve(__dirname, 'src'),
			],
			alias: {
				vue: 'vue/dist/vue.common.js',
			},
		},

		module: {
			rules: [
				{
					test: /\.vue?$/,
					loader: 'vue-loader',
				},
				{
					test: /\.js?$/,
					loader: 'babel-loader',
					exclude: /node_modules/,
				},
				{
					test: /\.css?$/,
					use: [
						'style-loader',
						'css-loader',
						'postcss-loader',
					],
				},
				{
					test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
					loader: 'url-loader',
				},
				{
					test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
					loader: 'url-loader?importLoaders=1&limit=100000',
				}
			],
		},

		plugins: [
			new HtmlWebpackPlugin({
				template: './src/index.html',
			}),
			...(options.mode === 'development' ? [
				// Dev-only plugins
				new webpack.HotModuleReplacementPlugin(),
				new webpack.NamedModulesPlugin(),
			] : [
				// Prod-only plugins
			]),
		],
	};
}
