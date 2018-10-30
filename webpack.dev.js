const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(scss)$/,
				use:
					[
						{
							// Adds CSS to the DOM by injecting a `<style>` tag
							loader: 'style-loader'
						},
						{
							// Interprets `@import` and `url()` like `import/require()` and will resolve them
							loader: 'css-loader?url=false'
						},
						{
							// Loader for webpack to process CSS with PostCSS
							loader: 'postcss-loader',
							options: {
								plugins: function () {
									return [
										require('autoprefixer')
									];
								}
							}
						},
						{
							// Loads a SASS/SCSS file and compiles it to CSS
							loader: 'sass-loader'
						}
					]
			}
		]
	},
})
