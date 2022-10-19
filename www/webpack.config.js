const path = require("path");

module.exports = {
	entry: "./src/index.js",
    mode: 'development',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					"css-loader",

				]
			},
			{
				test: /\.(js)$/,
				use: "babel-loader",
			}
		]
	},
	output: {
		path: path.resolve(__dirname, 'www/build'),
		filename: 'index.js'
	},
    devtool: 'source-map'
}