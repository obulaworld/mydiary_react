// libraries
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
// common configuration
module.exports = {
	entry: {
		app: "./src/index.js"
	},
	devServer: {
		historyApiFallback: true
	},
	plugins: [
		new CleanWebpackPlugin(["dist"]),
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./public/index.html"
    }),
    new CopyWebpackPlugin([
      { from: 'public/images', to: 'images' }
    ]),
	],
	module: {
		rules: [
			{
				test: /\.(css|scss)$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.(js|jsx)$/,
				use: ["babel-loader"],
				exclude: /node_modules/
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ["file-loader"]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ["file-loader"]
			}
		]
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "./dist")
	},
	resolve: {
		extensions: [".js", ".jsx"]
	}
};
