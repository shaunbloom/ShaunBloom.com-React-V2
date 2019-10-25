const path 				= require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

console.log("DevMode: ", devMode);

module.exports = {
	entry: {
		index: ['@babel/polyfill', path.resolve(__dirname, './src/js/index.js'), path.resolve(__dirname, './src/css/styles.less')],
	},
	output: {
		path: path.resolve(__dirname, './dist'),
	    filename: 'js/bundle.js'	
	},
	devServer: {
		contentBase: './dist'
	},
	resolve: {
		alias: {
			MainView     	  : 'src/views/MainView.jsx',
			applicationStyles : 'src/css/styles.css',
			commonJS          : path.resolve(__dirname, 'src/js/common.js')
		},
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
			    test: /\.(js|jsx)$/,
			    exclude: /node_modules/,
			    use: {
			      loader: "babel-loader"
			    }
			},
			{
				test: /\.html$/,
			    use: [
				    {
				    	loader: "html-loader"
				    }
				]
			},
			{
	            test: /\.less$/,
	            exclude: /node_modules/,
	            use: [
	                MiniCssExtractPlugin.loader,
	                { loader: 'css-loader', options: { url: false, sourceMap: true } },
	                { loader: 'less-loader', options: { sourceMap: true } }
	            ],
	        }
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
		  template: "./src/index.html",
		  filename: "./index.html"
		}),
		new MiniCssExtractPlugin({
		      publicPath: path.resolve(__dirname, './dist'),
		      filename: 'css/styles.css',
		      template: './src/css/styles.css',
		      ignoreOrder: false // Enable to remove warnings about conflicting order
		})
	]
};