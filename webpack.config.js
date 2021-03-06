const path 				= require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
	mode: devMode ? 'development' : 'production',
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
	devtool: devMode ? 'cheap-module-eval-sourcemap' : '',
	resolve: {
		alias: {
			MainView      : path.resolve(__dirname, 'src/views/MainView.jsx'),
			ArtView       : path.resolve(__dirname, 'src/views/ArtView.jsx'),
			FullArtView   : path.resolve(__dirname, 'src/views/FullArtView.jsx'),
			PortfolioView : path.resolve(__dirname, 'src/views/PortfolioView.jsx'),
			ResumeView    : path.resolve(__dirname, 'src/views/ResumeView.jsx'),
			HomeContent   : path.resolve(__dirname, 'src/components/HomeContent/HomeContent.jsx'),
			HomeText      : path.resolve(__dirname, 'src/components/HomeText/HomeText.jsx'),
			ContactText   : path.resolve(__dirname, 'src/components/ContactText/ContactText.jsx'),
			FrameworkNav  : path.resolve(__dirname, 'src/components/FrameworkNav/FrameworkNav.jsx'),
			MainNav       : path.resolve(__dirname, 'src/components/MainNav/MainNav.jsx'),
			Twinkle       : path.resolve(__dirname, 'src/components/Twinkle/Twinkle.jsx'),
			artData       : path.resolve(__dirname, 'src/js/models/art-data.js'),
			portfolioData : path.resolve(__dirname, 'src/js/models/portfolio-data.js'),
			resumeData    : path.resolve(__dirname, 'src/js/models/resume-data.js'),
			preloadData   : path.resolve(__dirname, 'src/js/models/img-preload-data.js'),
			commonJS      : path.resolve(__dirname, 'src/js/common.js')
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
	                { loader: 'css-loader', options: { url: false, sourceMap: devMode ? true : false } },
	                { loader: 'less-loader', options: { sourceMap: devMode ? true : false } }
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
	],
	optimization: {
		minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	}
};